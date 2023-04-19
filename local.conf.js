require('dotenv').config()

const { join } = require('path')
const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "Android",
        platformVersion: "8.1",
        deviceName: "ebac-qe",
        automationName: "UiAutomator2",
        app: join(process.cwd(), './app/android/wcandroid-12.9-Signed.apk'),
        appWaitActivity: 'com.woocommerce.android.ui.login.LoginActivity',
        newCommandTimeout: 240
    }]
}:{}

let localConf = {
    ...generalConf,
    ...capabilities,
    hostname: 'localhost',
    port: 4723,
    services: ['appium']
}

module.exports = { localConf }