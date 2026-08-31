# Run Appium Tests with Node.js and WebDriverIO on TestMu AI

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
  <a href="https://www.npmjs.com/package/webdriverio"><img src="https://img.shields.io/npm/v/webdriverio.svg?style=for-the-badge&labelColor=000000" alt="WebDriverIO version"></a>
</p>

## Getting Started

TestMu AI (formerly LambdaTest) enables you to run Appium tests with Node.js and WebDriverIO on real Android and iOS devices.

This sample project demonstrates how to configure and run Node.js WebDriverIO Appium tests on the TestMu AI Real Device Cloud.

* [Sign up for TestMu AI](https://www.testmuai.com/register/)
* [TestMu AI Documentation](https://www.testmuai.com/support/docs/)

## Prerequisites

* Node.js and npm installed on your machine
* A TestMu AI account
* TestMu AI username and access key

## Setup

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs-webdriverio
cd LT-appium-nodejs-webdriverio
npm install
```

## Configure Authentication

Set your TestMu AI username and access key as environment variables.

### Linux/macOS

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

### Windows

```bash
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

Note: Existing LambdaTest environment variable names (`LT_USERNAME` and `LT_ACCESS_KEY`) continue to be supported.

## Upload Your Application

Upload your Android `.apk` or iOS `.ipa` application to the TestMu AI Real Device Cloud using the App Upload API.

The API uses your username and access key for authentication.

### Upload Using App File

#### Linux/macOS

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
--location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
--form 'name="Android_App"' \
--form 'appFile=@"/path/to/your/app.apk"'
```

#### Windows

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@C:\path\to\your\app.apk"
```

### Upload Using App URL

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
--location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
--form 'name="Android_App"' \
--form 'url="YOUR_APP_DOWNLOAD_URL"'
```

The API response contains an `App URL` in the following format:

```text
lt://APP123456789123456789
```

Use this `APP_URL` in the `app` capability of your test configuration.

### Sample Applications

If you do not have an APK or IPA file, you can use the sample applications:

* [Sample Android App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Sample iOS App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa)

## Run Your First Test

The repository contains sample tests for both Android and iOS.

* [Android Test](https://github.com/LambdaTest/LT-appium-nodejs-webdriverio/blob/master/specs/android-test.js)
* [iOS Test](https://github.com/LambdaTest/LT-appium-nodejs-webdriverio/blob/master/specs/ios-test.js)

## Configure Test Capabilities

Update the capabilities in the respective configuration files before running your tests.

The sample configuration includes:

* Platform name
* Platform version
* Device name
* Application URL
* Build name
* Test name

### iOS Configuration

```javascript
exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["specs/ios-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO iOS",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "iPhone 13 Pro",
      platformVersion: "15",
      platformName: "iOS",
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
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
```

### Android Configuration

```javascript
exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["specs/android-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO Android",
      name: "Sample Test - WebDriverIO",
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
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
```

Important: Replace `YOUR_APP_URL` with the `App URL` generated after uploading your application.

You can also generate capabilities using the [TestMu AI Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).

For detailed Appium capabilities, refer to the [Appium Capabilities Guide](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

## Execute Tests

### Run a Single Android App Test

```bash
npm run SingleAndroidApp
```

### Run a Single Web Test on an Android Device

```bash
npm run SingleAndroidWeb
```

### Run Parallel Web Tests on Android Devices

```bash
npm run parallelWeb
```

### Run Parallel App Tests

```bash
npm run parallel
```

After execution, you can view your test results in the TestMu AI dashboard.

## Local Testing with TestMu AI Tunnel

If your application or test environment is hosted locally or behind a firewall, you can use TestMu AI Tunnel for local testing.

Refer to the OS-specific guides:

* [Local Testing on Windows](https://www.testmuai.com/support/docs/local-testing-for-windows/)
* [Local Testing on macOS](https://www.testmuai.com/support/docs/local-testing-for-macos/)
* [Local Testing on Linux](https://www.testmuai.com/support/docs/local-testing-for-linux/)

Add the following capability to your test configuration:

```javascript
tunnel: true,
```

## Useful Links

* [TestMu AI Documentation](https://www.testmuai.com/support/docs/)
* [Appium Capabilities Guide](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
* [Local Testing Documentation](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
* [CI/CD Integrations](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

## Support

For assistance, contact the TestMu AI Support team or use the 24/7 chat support available on the platform.

* [TestMu AI](https://www.testmuai.com/)
* [TestMu AI Documentation](https://www.testmuai.com/support/docs/)
* [TestMu AI Community](https://community.testmuai.com/)
