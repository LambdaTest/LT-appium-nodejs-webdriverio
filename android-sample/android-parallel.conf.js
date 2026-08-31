exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
  updateJob: false,
  specs: ["../specs/android-test.js"],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      "platformName": "Android",
      "lt:options": {
        deviceName: "Galaxy S22.*",
        platformVersion: "12",
        name: "Parallel Test - Device 1",
        isRealMobile: true,
        build: "LT_Appium_NodeJS_WebDriverIO_Parallel_Automation",
        app: process.env.LT_APP_ID || "lt://proverbial-android",
        devicelog: true,
        visual: true,
      }
    },
    {
      "platformName": "Android",
      "lt:options": {
        deviceName: "Pixel 6.*",
        platformVersion: "12",
        name: "Parallel Test - Device 2",
        isRealMobile: true,
        build: "LT_Appium_NodeJS_WebDriverIO_Parallel_Automation",
        app: process.env.LT_APP_ID || "lt://proverbial-android",
        devicelog: true,
        visual: true,
      }
    }
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