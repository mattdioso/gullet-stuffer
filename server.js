const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const buildPath = path.join(__dirname, 'build');
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

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
