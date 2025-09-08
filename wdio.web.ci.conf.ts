import type { Config } from "@wdio/types";
import base from "./wdio.conf";

export const config: Config = {
  ...base,

  hostname: "127.0.0.1",
  port: 4723,
  path: "/wd/hub",
  services: [],

  capabilities: [
    {
      platformName: "Android",
      browserName: "Chrome",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Pixel_5",
      "appium:avd": "Pixel_5",
      "appium:noReset": true,
      "appium:newCommandTimeout": 120,
    },
  ],

  maxInstances: 1,
};
export default config;
