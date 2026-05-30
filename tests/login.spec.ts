import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { ENV } from '../config/env';

test('Login validation', async ({ page }) => {

    await page.goto(ENV.baseurl);

    const loginPage = new Loginpage(page);

    await loginPage.login(
      'Admin',
      'admin123'
    );

    await expect(
      page.locator('//h6[text()="Dashboard"]')
    ).toBeVisible();

});