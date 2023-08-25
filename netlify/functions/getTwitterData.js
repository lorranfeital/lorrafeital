const axios = require('axios');

exports.handler = async function(event, context) {
    const API_URL = "https://api.twitter.com/1.1/trends/place.json?id=1"; // Exemplo: pegar trending topics mundiais

    const HEADERS = {
        Authorization: 'AAAAAAAAAAAAAAAAAAAAAL5hpgEAAAAAYkO7PJiODx5NUZ94A7ZgZlnwA6o%3DF9IJ9ReIgUee6zU0Z1gURSntMnV44vvPcMxZKM8F6EHaZiuOkS', // Substitua SEU_BEARER_TOKEN pelo seu Bearer Token
        "Content-Type": "application/json"
    };

    try {
        const response = await axios.get(API_URL, { headers: HEADERS });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message, details: error.response.data })
    };
}
}; // Esta é a chave de fechamento que estava faltando
