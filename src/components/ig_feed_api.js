const normalizeFeedItem = (item, index) => {
    const imageUrl = item.media_type === 'VIDEO'
        ? item.thumbnail_url
        : item.media_url;

    if (!imageUrl || !item.permalink) {
        return null;
    }

    return {
        id: item.id || `${item.permalink}-${index}`,
        permalink: item.permalink,
        mediaUrl: imageUrl,
        mediaType: item.media_type,
        caption: item.caption || '',
        timestamp: item.timestamp
    };
};

const parseFeedResponse = (json, limit) => {
    const rawItems = Array.isArray(json)
        ? json
        : json.data;

    if (!Array.isArray(rawItems)) {
        throw new Error('Instagram response did not include a media data array.');
    }

    return rawItems
        .map(normalizeFeedItem)
        .filter(Boolean)
        .slice(0, limit);
};

export const fetchInstagramFeed = async ({
    endpoint,
    limit = 10
} = {}) => {
    if (!endpoint) {
        throw new Error('Instagram feed requires an endpoint.');
    }

    const response = await fetch(endpoint, { cache: 'no-store' });
    const json = await response.json();

    if (!response.ok || json.error) {
        const message = json.error?.message || `Instagram request failed with status ${response.status}.`;
        throw new Error(message);
    }

    return parseFeedResponse(json, limit);
};
