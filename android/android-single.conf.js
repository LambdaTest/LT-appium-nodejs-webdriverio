exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./../tests/sample-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "WebDriverIO Sample Build",
      name: "WebDriverIO Test",
      isRealMobile: true,
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      app: "YOUR_APP_URL",
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
