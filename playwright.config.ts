import { PlaywrightTestConfig } from "@playwright/test";
import { getConfig } from "./src/config/environments";

const config: PlaywrightTestConfig = {
  testDir: "./src/tests",
  timeout: 5 * 60 * 1000,
  use: {
    baseURL: getConfig().baseUrl,
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
  },
  reporter: [
    ["html"],
    ["list"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ],
  ],
};

export default config;
