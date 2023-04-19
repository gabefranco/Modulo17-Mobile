require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? [
        './test/specs/login.spec.js',
] : []

module.exports = { specsConf }