import type { Options } from '@wdio/types';
import allure from '@wdio/allure-reporter';
import { androidWebCaps } from './src/config/caps.android.web';

export const config: Options.Testrunner = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',

  // specs
  specs: ['./test/specs/**/*.ts'],
  exclude: [],

  // services
  services: [['appium', { args: { relaxedSecurity: true } }]],

  // ✅ WDIO expects an array here
  capabilities: [androidWebCaps],

  // timeouts / retries
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10_000,
  connectionRetryTimeout: 120_000,
  connectionRetryCount: 3,

  // framework
  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 60_000 },
maxInstances: 1,

  // reporters
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      // We’ll attach screenshots manually in afterTest
      disableWebdriverScreenshotsReporting: true
    }]
  ],

  // 📸 attach screenshot on failure to Allure
  afterTest: async function (_test, _context, { passed }) {
    if (!passed) {
      const png = await browser.takeScreenshot();
      allure.addAttachment('screenshot', Buffer.from(png, 'base64'), 'image/png');
    }
  }
};
