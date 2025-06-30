exports.config = {
    runner: 'local',

    user: 'oauth-joaocarlosjr567-3e9b2',
    key: 'bb849913-dedb-49d1-a38c-02fb27bc24b1',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: '/wd/hub',

specs: [
    './test/specs/**/*.js'
],
    maxInstances: 1,
    capabilities: [
        {
            // platformName: 'Android',
            // 'appium:deviceName': 'ebac-qe',
            // 'appium:platformVersion': '16.0',
            // 'appium:automationName': 'UiAutomator2',
            // 'appium:appWaitActivity': '.MainActivity',
            // 'appium:disableIdLocatorAutocompletion': true,

            platformName: "iOS",
            "appium:deviceName": "iPhone Simulator",
            "appium:platformVersion": "17.0",
            "appium:automationName": "XCUITest",
            "appium:app": 'storage:filename=LojaEBAC-sim.zip',
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        {
            await browser.takeScreenshot();
        }
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};