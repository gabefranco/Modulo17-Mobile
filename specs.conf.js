require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/login.spec.js'
    ]
} : {}

module.exports = { specsConf }