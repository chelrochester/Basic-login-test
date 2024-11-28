import { page, Locator } from '@playwright/test';

export class LoginPage {
    public url = 'https://automationexercise.com/login';

    readonly page: Page;

    readonly $login: Locator;

    constructor(page: Page) {
        this.page = page;

        // this.$login = this.page.locator("#login");
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async login(user, password) {
        await this.page.locator('[data-qa="login-email"]').fill(user);
        await this.page.locator('[data-qa="login-password"]').fill(password);
        await this.page.locator('[data-qa="login-button"]').click();
    }
}