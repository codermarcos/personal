import { writeFileSync } from 'fs';

import puppeteer from 'puppeteer';

class ExtractCss {
	private path: string;

	constructor(path: string) {
		this.path = path;
	}

  apply(compiler) {
    compiler.hooks.done.tapPromise(
      'Extract css plugin',
      async () => {
        const browser = await puppeteer.launch({
          headless: 'chrome',
          args: [
            '--no-first-run',
            '--disable-extensions',
            '--disable-default-apps',
            '--no-default-browser-check',
          ],
        });

        const page = await browser.newPage();

        await page.goto(this.path);

        await page.waitForSelector('html')
        const value = await page.content();

        writeFileSync(this.path, value);

        await browser.close();
      }
    );
  }
}

export default ExtractCss;
