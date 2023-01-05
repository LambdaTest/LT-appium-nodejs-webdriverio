exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./../specs/android-test.js"],
  exclude: [],

  commonCapabilities: {
    build: "NodeJS WebdriverIO Android",
    name: "Sample Parallel Test - WebDriverIO",
    isRealMobile: true,
    app: "lt://proverbial-android",
  },

  capabilities: [
    {
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      build: "NodeJS WebdriverIO Android",
      name: "Sample Parallel Test - WebDriverIO",
      isRealMobile: true,
      app: "lt://proverbial-android",
    },
    {
      platformName: "Android",
      deviceName: "Galaxy S9 Plus",
      platformVersion: "10",
      build: "NodeJS WebdriverIO Android",
      name: "Sample Parallel Test - WebDriverIO",
      isRealMobile: true,
      app: "lt://proverbial-android",
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
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
