import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../pages/textBoxPage";

test.describe.skip("we are on homepage", () => {
  test("are on correct page", async ({ page }) => {
    const textboxPage = new TextBoxPage(page);

    await textboxPage.navigate();
    await expect(textboxPage.pageHeading).toBeVisible();
  });
});
