import type { Config } from "@wdio/types";
const config: Config = {
  hostname: "127.0.0.1",
  port: 4723,
  path: "/wd/hub",
  services: [], // Appium started by the workflow
  logLevel: "info",
  framework: "mocha",
  mochaOpts: { ui: "bdd", timeout: 60_000 },
  specs: ["./test/specs/**/*.ts"],
  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Pixel_5", // matches avd-name/profile
      "appium:noReset": true,
      "appium:newCommandTimeout": 120,
    },
  ],
  reporters: ["spec"],
};
export default config;
