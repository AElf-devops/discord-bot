const axios = require('axios')

const service = axios.create({
    baseURL: 'https://cat.schrodingerai.com/api',
    timeout: 20 * 10000
})

module.exports = {
    service
}