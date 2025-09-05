import { AuthScreen } from "@screens/auth.screen";
import { USERS } from "@utils/users";

export class LoginFlows {
    private auth = new AuthScreen();

    async as(user: keyof typeof USERS | { username: string; password: string }) {
        const creds = typeof user === 'string' ? USERS[user] : user;
        await this.auth.open();
        await this.auth.enterUsername(creds.username);
        await this.auth.enterPassword(creds.password);
        await this.auth.submit();
    }
}