// test/specs/smoke.e2e.ts
import { expect, $, browser } from '@wdio/globals';

describe('Smoke — start Android session', () => {
  it('boots a session and sees the screen', async () => {
    // Open any simple page so the DOM exists
    await browser.url('data:text/html,<html><body id="root">OK</body></html>');

    // sanity checks
    expect(browser.capabilities.platformName).toBe('Android');

    const body = await $('body');
    await expect(body).toBeExisting();
  });
});
