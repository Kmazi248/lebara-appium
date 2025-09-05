//import {expect} from '@wdio/globals';
import { Cartflow } from "@flows/cart.flow";
import { InventoryScreen } from "@screens/inventory.screen";
import { LoginFlows } from "@flows/login.flows";
//import { InventorySel } from '@src/selectors/inventory.sel';

describe('cart flow', () => {
    it('adds item to cart and opens cart', async () => {
        await new LoginFlows().as('standard');

        await new Cartflow().addItemAndOpenCart('sauce-labs-backpack');
        const inv = new InventoryScreen(); 
        await inv.expectVisible( inv.cartLink() );
        //await expect(inv.cartLink()).toHaveText('cart');
        
  });
});