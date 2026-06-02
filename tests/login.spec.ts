import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { ENV } from '../config/env';
import loginData from '../test-data/loginData.json';
import { DateUtil } from '../utils/Dateutils';

test('Login validation', async ({ page }) => {
    console.log(DateUtil.getCurrentDate());
    await page.goto(ENV.baseUrl);

    const loginPage = new Loginpage(page);

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await expect(
      page.locator('//h6[text()="Dashboard"]')
    ).toBeVisible();
    await loginPage.takeScreenshot("dashboard");
});

test('Invalid Login Validation',async({ page })=>
{
    await page.goto(ENV.baseUrl);

    const loginPage = new Loginpage(page);

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(
        page.locator('.oxd-alert-content-text')
    ).toContainText('Invalid credentials');
    await loginPage.takeScreenshot("Invaiduserpage");
});