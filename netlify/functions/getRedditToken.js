const axios = require('axios');
const qs = require('querystring');

exports.handler = async function(event, context) {
    const auth = 'Basic ' + Buffer.from('lmdD3-_YyhYG3ruys20d0g:5dTNdTSXmRpVnE2SvBiX8zOo8VLFeQ').toString('base64');

    const config = {
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    const body = {
        grant_type: 'password',
        username: 'lorranfeital',
        password: '9,xvA!eCNUKyQLz'
    };

    try {
        const response = await axios.post('https://www.reddit.com/api/v1/access_token', qs.stringify(body), config);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}
