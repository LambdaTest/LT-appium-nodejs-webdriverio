exports.config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["./../specs/android-ios-web-test.js"],
    exclude: [],
  
    commonCapabilities: {
      build: "NodeJS WebdriverIO - ltoptions - w3c",
    },
  
    capabilities: [
      {
        platformName: "Android",
        deviceName: ".*",
        platformVersion: "12",
        name: "android_none",
        isRealMobile: true,
        enableCustomTranslation: true,
      },
      {
        platformName: "Android",
        deviceName: ".*",
        platformVersion: "12",
        name: "android_w3c",
        isRealMobile: true,
        enableCustomTranslation: true,
        w3c: true,
      },
      {
        "lt:options": {
          platformName: "Android",
          deviceName: ".*",
          platformVersion: "12",
          name: "android_ltOptions",
          isRealMobile: true,
          enableCustomTranslation: true,
        }
      },
      {
        "lt:options": {
          platformName: "Android",
          deviceName: ".*",
          platformVersion: "12",
          name: "android_ltOptions_w3c",
          isRealMobile: true,
          enableCustomTranslation: true,
          w3c: true,
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
  