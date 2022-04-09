exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./../tests/sample-test.js"],
  exclude: [],

  commonCapabilities: {
    build: "WebdriverIO Sample [Parallel]",
    name: "Parallel-Test-Sample",
    isRealMobile: true,
    app: "YOUR_APP_URL",
  },

  capabilities: [
    {
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
    },
    {
      platformName: "Android",
      deviceName: "Galaxy S9 Plus",
      platformVersion: "10",
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

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
