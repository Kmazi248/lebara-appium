import type { Config } from "@wdio/types";
import base from "./wdio.conf"; // make sure wdio.conf.ts exports default

export const config: Config = {
  ...base,

  // Point to the Appium server you start in the workflow
  hostname: "127.0.0.1",
  port: 4723,
  path: "/wd/hub",

  // Don’t auto-start Appium via services in CI
  services: [],

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Pixel_5",
      "appium:avd": "Pixel_5",
      "appium:noReset": true,
      "appium:newCommandTimeout": 120,
      "appium:appPackage": "com.android.settings",
      "appium:appActivity": "com.android.settings.Settings",
      "appium:autoGrantPermissions": true,
      "appium:ignoreHiddenApiPolicyError": true,
    },
  ],

  maxInstances: 1,
};
export default config;
