import { $, expect } from '@wdio/globals';
import type { wdioEl } from '../types';

export abstract class BaseScreen {
  protected byTid(id: string) {
    return $(`[data-test="${id}"]`);
  }

  async click(el: wdioEl) {
    await el.waitForDisplayed({ timeout: 10000 });
    await el.click();
  }

  async type(el: wdioEl, text: string) {
    await el.waitForDisplayed({ timeout: 10000 });
    await el.setValue(text);
  }

  async expectVisible(el: wdioEl) {
    await expect(el).toBeDisplayed();
  }
}
