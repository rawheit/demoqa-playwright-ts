import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForElement(selector: string, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }
}
