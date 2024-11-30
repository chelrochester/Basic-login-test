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

    const logoutButton = page.locator('a[href="/logout"]');
    await expect(logoutButton).toBeVisible();

});