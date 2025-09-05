import { InventoryScreen } from "@screens/inventory.screen";

export class Cartflow {
    private inventory = new InventoryScreen();

    async addItemAndOpenCart(sku: string) {
        await this.inventory.addItemToCart(sku);
        await this.inventory.openCart();
    }   
}