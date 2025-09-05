import { browser } from '@wdio/globals';
import { BaseScreen } from "./base.screen";
import { AuthSel } from '@selectors/auth.sel';

export class AuthScreen extends BaseScreen {
    username = () => this.byTid(AuthSel.username);
    password = () => this.byTid(AuthSel.password);
    loginBtn = () => this.byTid(AuthSel.loginBtn);
    error = () => this.byTid(AuthSel.error);

    async open() { await browser.url('https://www.saucedemo.com/'); }

    async  enterUsername(v: string) { await this.type( this.username(), v);}
    async  enterPassword(v: string) { await this.type( this.password(), v);}
    async  submit() { await this.click( this.loginBtn());}

}   