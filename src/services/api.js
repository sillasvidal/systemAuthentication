const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:666'
});

module.exports = api;