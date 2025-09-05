import { expect } from '@wdio/globals';
import { AuthScreen } from '@screens/auth.screen';

describe('SOM scaffold', () => {
    it('opens login and sees username', async () => {
        const auth = new AuthScreen();
        await auth.open();
        await auth.expectVisible( auth.username());
        await expect(auth.username()).toBeDisplayed();
    });
});