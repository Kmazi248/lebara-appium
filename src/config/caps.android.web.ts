import type { Capabilities } from "@wdio/types";

export const androidWebCaps: Capabilities[] = [
  {
    platformName: "Android",
    browserName: "chrome",

    // Appium vendor options must be namespaced
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_8", // use your AVD name
    "appium:avd": "Pixel_8", // same as above if you auto-start the emulator
    "appium:newCommandTimeout": 120000,
    "appium:autoGrantPermissions": true,
    // optional if you manage chromedrivers yourself:
    // 'appium:chromedriverExecutableDir': 'C:\\path\\to\\chromedrivers'
  },
];
