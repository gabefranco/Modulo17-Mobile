require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "Android",
        "appium:app": "storage:filename=wcandroid-12.9-Signed.apk",
        "appium:deviceName": "Samsung Galaxy S9",
        "appium:platformVersion": "10",
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
  //  hostname: process.env.SAUCE_HOSTNAME,
  //  port: '443',
    region: 'us',
    services: [
        ['sauce', {
            sauceConnect: true,
        }]
    ]
}

module.exports = { sauceConf }