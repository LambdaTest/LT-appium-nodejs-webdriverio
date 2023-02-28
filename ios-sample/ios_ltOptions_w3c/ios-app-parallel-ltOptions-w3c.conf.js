exports.config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["./../specs/ios-test.js"],
    exclude: [],
  
    maxInstances: 10,
    commonCapabilities: {
      build: "NodeJS WebdriverIO - ltoptions - w3c",
    },
  
    capabilities: [
      {
        deviceName: ".*",
        platformName: "iOS",
        enableCustomTranslation: true,
        name: "ios_none",
        isRealMobile: true,
        app: "lt://proverbial-ios", //Set your APP URL
      },
      {
        deviceName: ".*",
        platformName: "iOS",
        enableCustomTranslation: true,
        name: "ios_w3c",
        isRealMobile: true,
        w3c: true,
        app: "lt://proverbial-ios", //Set your APP URL
      },
      {
        "lt:options": {
          deviceName: ".*",
          platformName: "iOS",
          enableCustomTranslation: true,
          name: "ios_ltOptions",
          isRealMobile: true,
          app: "lt://proverbial-ios", //Set your APP URL
        }
      },
      {
        "lt:options": {
          deviceName: ".*",
          platformName: "iOS",
          enableCustomTranslation: true,
          name: "ios_ltOptions_w3c",
          isRealMobile: true,
          w3c: true,
          app: "lt://proverbial-ios", //Set your APP URL
        }
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
    hostname: "mobile-hub.lambdatest.com",
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
  