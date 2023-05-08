require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "Android",
        "appium:app": "storage:filename=ebac-qe1.apk",
        "appium:deviceName": "Samsung.*",
        "appium:platformVersion": "10",
        "appium:automationName": "UiAutomator2",
        "sauce:options": {
            "build": "Gabe_RealDevice1",
            "name": "Ebac-Wooc17"
        }
    }]
} : {}

let sauceConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: [
    ]
}

module.exports = { sauceConf }