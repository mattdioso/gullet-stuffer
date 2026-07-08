const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const buildPath = path.join(__dirname, 'build');
const assetManifestPath = path.join(buildPath, 'asset-manifest.json');
const instagramBaseUrl = 'https://graph.instagram.com';
const mediaFields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp'
].join(',');

const cacheTtlMs = Number(process.env.IG_CACHE_TTL_SECONDS || 900) * 1000;
let cachedFeed = null;
let cachedAt = 0;
const dojiggyCacheTtlMs = Number(process.env.DOJIGGY_CACHE_TTL_SECONDS || 900) * 1000;
let cachedDojiggyLeaderboards = null;
let cachedDojiggyAt = 0;
let builtAssetAliases = {};
const gs8AthleteCampaigns = [
    { name: 'Crosby Schultz', campaignUrl: 'https://go.dojiggy.io/a46932/m/crozbaby/Member/Details' },
    { name: 'Micheal Pascua', campaignUrl: 'https://go.dojiggy.io/a46932/m/pascua/Member/Details' },
    { name: 'Dan W', campaignUrl: 'https://go.dojiggy.io/a46932/m/thevoid/Member/Details' },
    { name: 'Rosa Mestas', campaignUrl: 'https://go.dojiggy.io/nocrust/m/8d8834' },
    { name: 'Mathias Deeg', campaignUrl: 'https://go.dojiggy.io/nocrust/m/sweetcream' },
    { name: 'Jon Pendleton', campaignUrl: 'https://go.dojiggy.io/nocrust/m/jonp' },
    { name: 'Raul Melgarejo', campaignUrl: 'https://go.dojiggy.io/nocrust/m/gulletmullet' },
    { name: 'Diontae Harden', campaignUrl: 'https://go.dojiggy.io/nocrust/m/darkknight' },
    { name: 'Madi Hinkel', campaignUrl: 'https://go.dojiggy.io/nocrust/m/hinkel' },
    { name: 'Scott Petrushka', campaignUrl: 'https://go.dojiggy.io/nocrust/m/thegobbler' },
    { name: 'Naader Reda', campaignUrl: 'https://go.dojiggy.io/nocrust/m/freak' },
    { name: 'Miles Zoltak', campaignUrl: 'https://go.dojiggy.io/nocrust/m/miles' },
    { name: 'Sam Shirley', campaignUrl: 'https://go.dojiggy.io/nocrust/m/mermaid' },
    { name: 'Jeremy Katz', campaignUrl: 'https://go.dojiggy.io/nocrust/m/jaws' },
    { name: 'Kenney Tran', campaignUrl: 'https://go.dojiggy.io/nocrust/m/thepeoplesmusubi' },
    { name: 'Oden', campaignUrl: 'https://go.dojiggy.io/nocrust/m/734514' },
    { name: 'Jessamyn Reichmann', campaignUrl: 'https://go.dojiggy.io/nocrust/m/sweetheart' },
    { name: 'Jonathan Gong', campaignUrl: 'https://go.dojiggy.io/nocrust/m/jonboat' },
    { name: 'Ashwin Muthy', campaignUrl: 'https://go.dojiggy.io/nocrust/m/darkhorse' }
];

try {
    builtAssetAliases = require(assetManifestPath).files || {};
} catch (error) {
    console.warn('Build asset manifest could not be loaded:', error.message);
}

const getInstagramConfig = () => ({
    userId: process.env.IG_USER_ID || process.env.REACT_APP_IG_USER_ID || 'me',
    accessToken: process.env.IG_ACCESS_TOKEN || process.env.REACT_APP_IG_ACCESS_TOKEN,
    limit: process.env.IG_FEED_LIMIT || '10'
});

const buildInstagramUrl = ({ userId, accessToken, limit }) => {
    const url = new URL(`${instagramBaseUrl}/${userId}/media`);
    url.search = new URLSearchParams({
        fields: mediaFields,
        limit,
        access_token: accessToken
    });

    return url;
};

const normalizeMediaItem = (item) => ({
    id: item.id,
    caption: item.caption || '',
    media_type: item.media_type,
    media_url: item.media_url,
    thumbnail_url: item.thumbnail_url,
    permalink: item.permalink,
    timestamp: item.timestamp
});

const normalizeDojiggySourceUrl = (sourceUrl) => {
    const url = new URL(sourceUrl);
    const googleSheetMatch = url.pathname.match(/\/spreadsheets\/d\/([^/]+)/);

    if (!googleSheetMatch || url.pathname.includes('/export') || url.pathname.includes('/pub')) {
        return sourceUrl;
    }

    const sheetId = googleSheetMatch[1];
    const gid = url.searchParams.get('gid') || process.env.DOJIGGY_GOOGLE_SHEET_GID || '0';

    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
};

const parseNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }

    if (!value) {
        return 0;
    }

    const parsed = Number(String(value).replace(/[^0-9.-]/g, ''));
    return Number.isNaN(parsed) ? 0 : parsed;
};

const normalizeFieldName = (fieldName) => String(fieldName).toLowerCase().replace(/[^a-z0-9]/g, '');

const getFirstValue = (item, keys) => {
    const normalizedItem = Object.keys(item).reduce((acc, key) => ({
        ...acc,
        [normalizeFieldName(key)]: item[key]
    }), {});

    for (const key of keys) {
        if (item[key] !== undefined && item[key] !== null && String(item[key]).trim() !== '') {
            return item[key];
        }

        const normalizedKey = normalizeFieldName(key);
        if (
            normalizedItem[normalizedKey] !== undefined
            && normalizedItem[normalizedKey] !== null
            && String(normalizedItem[normalizedKey]).trim() !== ''
        ) {
            return normalizedItem[normalizedKey];
        }
    }

    return '';
};

const defaultNameKeys = ['name', 'displayName', 'participantName', 'fundraiserName', 'donorName'];
const fundraiserNameKeys = ['fundraiserName', 'participantName', 'creditedFundraiser', 'athleteName', 'teamMemberName', 'memberName'];
const donorNameKeys = ['donorName', 'donor', 'supporterName', 'name', 'displayName'];
const donorIdentityKeys = ['donorName', 'donor', 'supporterName'];
const fundraiserTypeMatchers = ['fundraiser', 'participant', 'team', 'member', 'athlete'];
const donationTypeMatchers = ['donation', 'transaction', 'gift', 'payment'];
const donorTypeMatchers = ['donor', 'supporter'];
const eventTypeMatchers = ['campaign', 'event', 'organization', 'charity'];
const eventFundraiserNameMatchers = ['gulletstuffer', 'nocrustnoproblem'];

const normalizeName = (item, nameKeys = defaultNameKeys) => {
    const directName = getFirstValue(item, nameKeys);

    if (directName) {
        return String(directName).trim();
    }

    const firstName = getFirstValue(item, ['firstName', 'first_name']);
    const lastName = getFirstValue(item, ['lastName', 'last_name']);
    const fullName = `${firstName} ${lastName}`.trim();

    if (fullName) {
        return fullName;
    }

    const fallbackName = getFirstValue(item, ['name', 'displayName']);
    return fallbackName ? String(fallbackName).trim() : '';
};

const isEventFundraiserName = (name) => {
    const normalizedName = normalizeFieldName(name);
    return eventFundraiserNameMatchers.some((matcher) => normalizedName.includes(matcher));
};

const normalizeDonationRow = (item, index) => {
    const amount = parseNumber(getFirstValue(item, [
        'amount',
        'donationAmount',
        'giftAmount',
        'transactionAmount',
        'paymentAmount'
    ]));
    const donorName = getFirstValue(item, [
        'donorName',
        'donor',
        'name',
        'displayName',
        'supporterName'
    ]) || 'Anonymous';
    const fundraiserName = getFirstValue(item, [
        'fundraiserName',
        'participantName',
        'creditedFundraiser',
        'athleteName',
        'teamMemberName'
    ]);
    const validFundraiserName = isEventFundraiserName(fundraiserName) ? '' : fundraiserName;

    if (amount <= 0 && !validFundraiserName && !donorName) {
        return null;
    }

    return {
        id: getFirstValue(item, ['id', 'transactionId', 'donationId']) || `donation-${index}`,
        donorName: String(donorName).trim() || 'Anonymous',
        fundraiserName: String(validFundraiserName).trim(),
        amount,
        message: getFirstValue(item, ['message', 'comment', 'note']),
        timestamp: getFirstValue(item, ['timestamp', 'createdAt', 'date', 'donationDate'])
    };
};

const aggregateDonationRows = (rows, limit) => {
    const fundraisers = new Map();
    const donors = new Map();

    rows.map(normalizeDonationRow).filter(Boolean).forEach((row) => {
        if (row.fundraiserName) {
            const currentFundraiser = fundraisers.get(row.fundraiserName) || {
                id: row.fundraiserName,
                name: row.fundraiserName,
                amount: 0,
                donationCount: 0,
                avatarUrl: '',
                message: ''
            };
            currentFundraiser.amount += row.amount;
            currentFundraiser.donationCount += 1;
            fundraisers.set(row.fundraiserName, currentFundraiser);
        }

        if (row.donorName) {
            const currentDonor = donors.get(row.donorName) || {
                id: row.donorName,
                name: row.donorName,
                amount: 0,
                donationCount: 0,
                avatarUrl: '',
                message: row.message
            };
            currentDonor.amount += row.amount;
            currentDonor.donationCount += 1;
            currentDonor.message = currentDonor.message || row.message;
            donors.set(row.donorName, currentDonor);
        }
    });

    return {
        fundraisers: Array.from(fundraisers.values()).sort((a, b) => b.amount - a.amount).slice(0, limit),
        donors: Array.from(donors.values()).sort((a, b) => b.amount - a.amount).slice(0, limit)
    };
};

const normalizeLeaderboardEntry = (item, index, nameKeys) => {
    const amount = parseNumber(getFirstValue(item, ['amount', 'amountRaised', 'totalRaised', 'total', 'donationAmount', 'giftAmount']));
    const name = normalizeName(item, nameKeys);

    if (!name && amount <= 0) {
        return null;
    }

    return {
        id: getFirstValue(item, ['id', 'participantId', 'donorId']) || `${name || 'entry'}-${index}`,
        name: name || 'Anonymous',
        amount,
        donationCount: parseNumber(getFirstValue(item, ['donationCount', 'donations', 'uniqueDonors'])),
        avatarUrl: getFirstValue(item, ['avatarUrl', 'imageUrl', 'photoUrl', 'profileImageUrl']),
        message: getFirstValue(item, ['message', 'comment', 'note'])
    };
};

const sortAndLimitEntries = (entries, limit, nameKeys) => entries
    .map((entry, index) => normalizeLeaderboardEntry(entry, index, nameKeys))
    .filter(Boolean)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);

const rowTypeIncludes = (type, matchers) => matchers.some((matcher) => type.includes(matcher));

const hasFundraiserIdentity = (row) => {
    const fundraiserName = getFirstValue(row, fundraiserNameKeys);
    return Boolean(fundraiserName) && !isEventFundraiserName(fundraiserName);
};

const hasDonorIdentity = (row) => Boolean(getFirstValue(row, donorIdentityKeys));

const hasDonationIdentity = (row) => Boolean(getFirstValue(row, [
    'transactionId',
    'donationId',
    'giftId',
    'paymentId',
    'donationDate',
    'transactionDate'
]));

const isEventSummaryRow = (row, type) => {
    if (hasFundraiserIdentity(row)) {
        return false;
    }

    return rowTypeIncludes(type, eventTypeMatchers) || Boolean(getFirstValue(row, [
        'campaignName',
        'campaignTitle',
        'eventName',
        'eventTitle',
        'organizationName',
        'charityName'
    ]));
};

const decodeEscapedJsonValue = (value) => {
    try {
        return JSON.parse(`"${value}"`);
    } catch (error) {
        return value;
    }
};

const parseDojiggyMemberPage = (html, fallbackName) => {
    const totalRaisedMatch = html.match(/\\"TotalRaised\\":([0-9.]+)/);
    const memberNameMatch = html.match(/\\"MemberName\\":\\"((?:\\\\.|[^\\"])*)\\"/);
    const donorCountMatch = html.match(/\\"SupportersCount\\":([0-9]+)/);

    return {
        name: memberNameMatch ? decodeEscapedJsonValue(memberNameMatch[1]) : fallbackName,
        amount: totalRaisedMatch ? Number(totalRaisedMatch[1]) : 0,
        donationCount: donorCountMatch ? Number(donorCountMatch[1]) : 0
    };
};

const fetchAthleteCampaignTotal = async ({ name, campaignUrl }) => {
    const response = await fetch(campaignUrl);

    if (!response.ok) {
        throw new Error(`DoJiggy member page returned ${response.status}.`);
    }

    const html = await response.text();
    const memberPage = parseDojiggyMemberPage(html, name);

    return {
        id: campaignUrl,
        name: memberPage.name,
        amount: memberPage.amount,
        donationCount: memberPage.donationCount,
        avatarUrl: '',
        message: ''
    };
};

const fetchAthleteCampaignLeaderboards = async (limit) => {
    if (process.env.DOJIGGY_ATHLETE_PAGES_ENABLED === 'false') {
        return [];
    }

    const entries = await Promise.all(
        gs8AthleteCampaigns.map(async (athlete) => {
            try {
                return await fetchAthleteCampaignTotal(athlete);
            } catch (error) {
                console.error(`DoJiggy athlete page request failed for ${athlete.name}:`, error.message);
                return null;
            }
        })
    );

    return entries
        .filter((entry) => entry && entry.amount > 0)
        .sort((a, b) => b.amount - a.amount)
        .slice(0, limit);
};

const parseCsvRows = (csv) => {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    for (let index = 0; index < csv.length; index += 1) {
        const char = csv[index];
        const nextChar = csv[index + 1];

        if (char === '"' && inQuotes && nextChar === '"') {
            field += '"';
            index += 1;
        } else if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            row.push(field);
            field = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && nextChar === '\n') {
                index += 1;
            }

            row.push(field);
            if (row.some((value) => value.trim() !== '')) {
                rows.push(row);
            }
            row = [];
            field = '';
        } else {
            field += char;
        }
    }

    row.push(field);
    if (row.some((value) => value.trim() !== '')) {
        rows.push(row);
    }

    if (rows.length < 2) {
        return [];
    }

    const headers = rows[0].map((header) => header.trim());
    return rows.slice(1).map((values) => headers.reduce((acc, header, index) => ({
        ...acc,
        [header]: values[index] || ''
    }), {}));
};

const splitLeaderboardRows = (rows) => {
    const fundraisers = [];
    const donors = [];
    const donations = [];

    rows.forEach((row) => {
        const type = String(getFirstValue(row, ['type', 'leaderboard', 'category', 'role'])).toLowerCase();
        const fundraiserIdentity = hasFundraiserIdentity(row);
        const donorIdentity = hasDonorIdentity(row);

        if (isEventSummaryRow(row, type)) {
            return;
        }

        if (
            rowTypeIncludes(type, donationTypeMatchers)
            || (fundraiserIdentity && donorIdentity)
            || (fundraiserIdentity && hasDonationIdentity(row))
            || (donorIdentity && hasDonationIdentity(row))
        ) {
            donations.push(row);
        } else if (rowTypeIncludes(type, donorTypeMatchers)) {
            donors.push(row);
        } else if (rowTypeIncludes(type, fundraiserTypeMatchers) || fundraiserIdentity) {
            fundraisers.push(row);
        }
    });

    if (donations.length) {
        return {
            donations
        };
    }

    return {
        fundraisers,
        donors
    };
};

const normalizeDojiggyPayload = (payload, limit) => {
    if (Array.isArray(payload)) {
        const splitRows = splitLeaderboardRows(payload);

        if (splitRows.donations) {
            return {
                ...aggregateDonationRows(splitRows.donations, limit),
                updatedAt: new Date().toISOString()
            };
        }

        return {
            fundraisers: sortAndLimitEntries(splitRows.fundraisers, limit, fundraiserNameKeys),
            donors: sortAndLimitEntries(splitRows.donors, limit, donorNameKeys),
            updatedAt: new Date().toISOString()
        };
    }

    return {
        fundraisers: sortAndLimitEntries(payload.fundraisers || payload.topFundraisers || payload.participants || [], limit, fundraiserNameKeys),
        donors: sortAndLimitEntries(payload.donors || payload.topDonors || payload.donations || [], limit, donorNameKeys),
        updatedAt: payload.updatedAt || payload.lastUpdated || new Date().toISOString()
    };
};

const fetchDojiggyLeaderboards = async () => {
    const sourceUrl = process.env.DOJIGGY_LEADERBOARDS_URL;
    const accessToken = process.env.DOJIGGY_ACCESS_TOKEN;
    const limit = Number(process.env.DOJIGGY_LEADERBOARD_LIMIT || 5);

    if (!sourceUrl) {
        return {
            fundraisers: [],
            donors: [],
            updatedAt: null,
            configured: false
        };
    }

    const normalizedSourceUrl = normalizeDojiggySourceUrl(sourceUrl);
    const response = await fetch(normalizedSourceUrl, {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
    });
    const body = await response.text();

    if (!response.ok) {
        const error = new Error(`DoJiggy leaderboard source returned ${response.status}.`);
        error.status = response.status;
        throw error;
    }

    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('json') || body.trim().startsWith('{') || body.trim().startsWith('[')
        ? JSON.parse(body)
        : parseCsvRows(body);

    const leaderboards = {
        ...normalizeDojiggyPayload(payload, limit),
        configured: true
    };

    if (!leaderboards.fundraisers.length) {
        leaderboards.fundraisers = await fetchAthleteCampaignLeaderboards(limit);
    }

    return leaderboards;
};

const fetchInstagramFeed = async () => {
    const config = getInstagramConfig();

    if (!config.accessToken) {
        const error = new Error('Missing IG_ACCESS_TOKEN.');
        error.status = 500;
        throw error;
    }

    const response = await fetch(buildInstagramUrl(config));
    const json = await response.json();

    if (!response.ok || json.error) {
        const error = new Error(json.error?.message || 'Instagram request failed.');
        error.status = response.status || 502;
        throw error;
    }

    return {
        data: (json.data || []).map(normalizeMediaItem),
        paging: json.paging
    };
};

app.get('/api/instagram-feed', async (req, res) => {
    if (cachedFeed && Date.now() - cachedAt < cacheTtlMs) {
        res.set('Cache-Control', `public, max-age=${Math.floor(cacheTtlMs / 1000)}`);
        return res.json(cachedFeed);
    }

    try {
        const feed = await fetchInstagramFeed();
        cachedFeed = feed;
        cachedAt = Date.now();

        res.set('Cache-Control', `public, max-age=${Math.floor(cacheTtlMs / 1000)}`);
        return res.json(feed);
    } catch (error) {
        console.error('Instagram feed request failed:', error.message);

        if (cachedFeed) {
            res.set('Cache-Control', 'no-cache');
            res.set('Warning', '110 - "Serving stale Instagram feed"');
            return res.json(cachedFeed);
        }

        res.set('Cache-Control', 'no-store');
        return res.status(error.status || 502).json({
            error: 'Instagram feed is unavailable.'
        });
    }
});

app.get('/api/dojiggy-leaderboards', async (req, res) => {
    if (cachedDojiggyLeaderboards && Date.now() - cachedDojiggyAt < dojiggyCacheTtlMs) {
        res.set('Cache-Control', `public, max-age=${Math.floor(dojiggyCacheTtlMs / 1000)}`);
        return res.json(cachedDojiggyLeaderboards);
    }

    try {
        const leaderboards = await fetchDojiggyLeaderboards();
        cachedDojiggyLeaderboards = leaderboards;
        cachedDojiggyAt = Date.now();

        res.set('Cache-Control', `public, max-age=${Math.floor(dojiggyCacheTtlMs / 1000)}`);
        return res.json(leaderboards);
    } catch (error) {
        console.error('DoJiggy leaderboard request failed:', error.message);

        if (cachedDojiggyLeaderboards) {
            res.set('Cache-Control', 'no-cache');
            res.set('Warning', '110 - "Serving stale DoJiggy leaderboard data"');
            return res.json(cachedDojiggyLeaderboards);
        }

        res.set('Cache-Control', 'no-store');
        return res.status(error.status || 502).json({
            error: 'DoJiggy leaderboards are unavailable.'
        });
    }
});

app.get(['/main.js', '/main.css'], (req, res, next) => {
    const assetPath = builtAssetAliases[req.path.slice(1)];

    if (!assetPath) {
        return next();
    }

    res.set('Cache-Control', 'no-cache');
    return res.redirect(302, assetPath);
});

app.use(express.static(buildPath, {
    index: false,
    setHeaders: (res, filePath) => {
        if (filePath === path.join(buildPath, 'index.html')) {
            res.set('Cache-Control', 'no-cache');
        } else if (filePath.startsWith(path.join(buildPath, 'static'))) {
            res.set('Cache-Control', 'public, max-age=31536000, immutable');
        }
    }
}));

app.get('*', (req, res) => {
    if (path.extname(req.path) || !req.accepts('html')) {
        return res.status(404).send('Not found');
    }

    res.set('Cache-Control', 'no-cache');
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
