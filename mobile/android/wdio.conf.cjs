exports.config = {
    runner: 'local',
    port: 4723,

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
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:appWaitActivity': '.MainActivity',
        // 'appium:disableIdLocatorAutocompletion': true,

        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Google.*',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        "appium:disableIdLocatorAutocompletion": true,
        'sauce:options': {
            build: 'appium-build-teste-bacshop',
            name: 'Ebac Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0'
        }
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
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    {
        await browser.takeScreenshot();
    }
},
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};