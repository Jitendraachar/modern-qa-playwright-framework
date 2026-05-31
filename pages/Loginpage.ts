import { Page } from '@playwright/test';
import { BasePage } from './Basepage';
export class Loginpage extends BasePage {
   
    username = 'input[name="username"]';
    password = 'input[name="password"]';
    loginButton = 'button[type="submit"]';

    async login(user: string, pass: string){

        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginButton);
        
    }
    
}
