import type { Capabilities } from "@wdio/types";

export const androidNativeCaps: Capabilities[] = [
  {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_8", // your AVD name
    "appium:avd": "Pixel_8", // auto-start it if not running
    "appium:noReset": true,
    "appium:newCommandTimeout": 120,
    "appium:appPackage": "com.android.settings",
    "appium:appActivity": "com.android.settings.Settings",
    "appium:appWaitActivity": "com.android.settings.Settings",
    "appium:appWaitForLaunch": true,
  },
];
