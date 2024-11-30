import { test, expect } from './fixtures/base';
import { LoginPage } from './pageObjects/pom';
import { page } from '@playwright/test'

const {user, password} = process.env;

test("log into automationexercise", async ({
    page,
    loginPage,
}) => {
    await loginPage.goto();
    await loginPage.login(user, password);
    await this.page.waitForNavigation();

    const logoutButton = page.locator('text=" Logout"');
    await expect(logoutButton).toBeVisible({ timeout: 15000 });

});