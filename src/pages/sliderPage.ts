import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class SliderPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
      await super.navigate("/slider");
  }
}
