exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./../specs/ios-test.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    build: "NodeJS WebdriverIO iOS",
    name: "Sample Parallel Test - WebDriverIO",
    isRealMobile: true,
    app: "YOUR_APP_URL", //Set your APP URL
  },

  capabilities: [
    {
      deviceName: "iPhone 13 Pro",
      platformVersion: "15",
      platformName: "iOS",
    },
    {
      deviceName: "iPhone 13 Pro Max",
      platformVersion: "15",
      platformName: "iOS",
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
  hostname: "beta-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
