import { test, expect } from '@playwright/test';

test('Login page validation', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page.locator('input[name="username"]')).toBeVisible();

    await page.fill('input[name="username"]', 'Admin');

    await page.fill('input[name="password"]', 'admin123');

    await page.click('button[type="submit"]');

    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();

});