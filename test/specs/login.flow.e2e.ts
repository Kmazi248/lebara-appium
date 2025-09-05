//import { expect } from '@wdio/globals';
import { LoginFlows } from "@flows/login.flows";
import { InventoryScreen } from "@screens/inventory.screen";

describe('login flow', () => {
    it('logsd in as standard user', async () =>{
        await new LoginFlows().as('standard');
        await new InventoryScreen().expectCartVisible();
    });
});