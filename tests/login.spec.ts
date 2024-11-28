import { test, expect } from './fixtures/base';
import { LoginPage } from './pageObjects/pom';

const {user, password} = process.env;

test("log into automationexercise", async ({
    loginPage,
}) => {
    await loginPage.goto();
    await loginPage.login(user, password);

});