exports.config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["./../specs/android-ios-web-test.js"],
    exclude: [],
  
    maxInstances: 10,
    commonCapabilities: {
      build: "LT_Appium_NodeJS_WebDriverIO_Web_Automation",
      name: "Sample Parallel Test - WebDriverIO",
      isRealMobile: true
    },
  
    capabilities: [
      {
        deviceName: "iPhone.*",
        platformVersion: "14",
        platformName: "iOS",
        name: "Sample Parallel Test - WebDriverIO",
      },
      {
        deviceName: "iPhone.*",
        platformVersion: "15",
        platformName: "iOS",
        name: "Sample Parallel Test - WebDriverIO",
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
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  