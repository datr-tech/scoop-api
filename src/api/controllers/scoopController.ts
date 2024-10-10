import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { IControllerScoop } from '@app/interfaces/api';

export const scoopController: IControllerScoop = async ({ url, script }) => {
  chromium.use(stealth());

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);

  const fn = eval(script);
  const result = await fn(page);
  await browser.close();

  return {
    result,
  };
};
