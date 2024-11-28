import {test as base} from '@playwright/test';
import { LoginPage } from '../pageObjects/pom';

type MyFixtures = {
    loginPage: LoginPage,
};

export const test = base.extend<MyFixtures>({
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page))
    },
    contentPage: async({ page }, use) => {
        await use(new ContentPage(page))
    },
});

export {expect} from '@playwright/test';