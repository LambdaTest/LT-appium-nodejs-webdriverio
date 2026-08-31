exports.config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["../../specs/android-test.js"],
    exclude: [],
  
    capabilities: [
      {
        "platformName": "Android",
        "lt:options": {
          deviceName: ".*",
          platformVersion: "13",
          name: "android_ltOptions",
          isRealMobile: true,
          app: process.env.LT_APP_ID || "lt://proverbial-android",
          build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_App_Automation",
          devicelog: true,
          visual: true,
          enableCustomTranslation: true,
        }
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL || "mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
};