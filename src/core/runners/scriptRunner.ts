import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

export const scriptRunner = async ({ url, script }) => {
  chromium.use(stealth());

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);

  const fn = eval(script);
  fn(page);
};
