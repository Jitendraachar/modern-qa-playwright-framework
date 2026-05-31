import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}
    async click(locator: string) {
        await this.page.click(locator);

    }
    async fill(locator: string, value:string) {
        await this.page.fill(locator,value);
    }
    async getText(locator: string) {
        return await this.page.textContent(locator);
    }
    async takeScreenshot(name: string){
        await this.page.screenshot({
            path: 'screenshots/${name}.png'
        })
    }
}