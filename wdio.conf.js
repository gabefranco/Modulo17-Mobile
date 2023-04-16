
const { join } = require('path')

const allure = require('allure-commandline')
const video = import('wdio-video-reporter')

exports.config = {
    runner: 'local',
    specs: ['test/specs/**/*.spec.js'],
    exclude: [],
    maxInstances: 20,
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "8.1",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/wcandroid-12.9-Signed.apk'),
        "appPackage": 'com.woocommerce.android',
        "appActivity": '.ui.main.MainActivity',
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        'newCommandTimeout': 240
    }],
    logLevel: 'info',
    bail: 0,
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ['appium'],
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        ['video', {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 30, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot();
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }

}

