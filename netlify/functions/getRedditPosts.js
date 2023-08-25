const axios = require('axios');

exports.handler = async function(event, context) {
    const accessToken = event.headers.authorization;
    const subreddit = event.queryStringParameters.subreddit || 'all';

    const config = {
        headers: {
            'Authorization': 'bearer ' + accessToken,
            'User-Agent': 'SondaSocial'
        }
    };

    try {
        const response = await axios.get(`https://oauth.reddit.com/r/${subreddit}/hot`, config);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data.data.children)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}