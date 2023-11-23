exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./../specs/ios-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "LT_Appium_NodeJS_WebDriverIO_App_Automation",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "iPhone.*",
      platformVersion: "15",
      platformName: "iOS",
      app: process.env.LT_APP_ID||"lt://proverbial-ios", //Set your APP URL
      network: true,
      devicelog: true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
