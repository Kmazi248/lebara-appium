// src/screens/inventory.screen.ts
import { BaseScreen } from './base.screen';
import { InventorySel } from '@selectors/inventory.sel';

export class InventoryScreen extends BaseScreen {
  cartLink = () => this.byTid(InventorySel.cartLink);
  addToCartBtn = (sku: string) => this.byTid(InventorySel.addToCart(sku));

  // --- Actions ---
  async openCart() { await this.click(this.cartLink()); }
  async addItemToCart(sku: string) { await this.click(this.addToCartBtn(sku)); }

  // --- Assertions ---
  async expectCartVisible() { await this.expectVisible(this.cartLink()); }
}
