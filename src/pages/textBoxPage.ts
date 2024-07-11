import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class TextBoxPage extends BasePage {
  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = this.page.getByRole("heading", { name: "Text Box" });
  }

  async navigate() {
    await super.navigate("/text-box");
  }
}
