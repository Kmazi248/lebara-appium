import type { Options } from "@wdio/types";
import allure from "@wdio/allure-reporter";
import { androidWebCaps } from "./src/config/caps.android.web";
import { androidNativeCaps } from "./src/config/caps.android.native";

const CI = process.env.CI === "true";
const TARGET = (process.env.TARGET ?? "native") as "native" | "web";

export const config: Options.Testrunner = {
  runner: "local",

  specs: ["./test/specs/**/*.ts"],
  exclude: [],

  // Use Appium service locally; in CI we connect to the server the workflow starts
  services: CI ? [] : [["appium", { args: { relaxedSecurity: true } }]],

  // Only set these in CI so we point to the Action's Appium server
  ...(CI ? { hostname: "127.0.0.1", port: 4723, path: "/wd/hub" } : {}),

  maxInstances: 1,
  logLevel: "info",
  waitforTimeout: 10_000,
  connectionRetryTimeout: 120_000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: { ui: "bdd", timeout: 60_000 },

  // ✅ pass a single array of caps
  capabilities: TARGET === "web" ? androidWebCaps : androidNativeCaps,

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  afterTest: async (_test, _ctx, { passed }) => {
    if (!passed) {
      const png = await browser.takeScreenshot();
      allure.addAttachment(
        "screenshot",
        Buffer.from(png, "base64"),
        "image/png",
      );
    }
  },
};
