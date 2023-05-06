import { writeFileSync } from 'fs';

import puppeteer from 'puppeteer';

import { resolve } from 'path';

import pkg from './package.json';

async function main(lang = 'pt') {
	console.log(`START css extraction to ${lang}!`);

	const langPath = `${lang === 'pt' ? '' : lang + '/'}index.html`;

	const path = resolve(pkg.bundle, langPath);

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

	await page.goto(path);

	await page.waitForSelector('html')

	const value = await page.content();

	await browser.close();

	writeFileSync(path, value.replace('<script defer="defer" src="style.js"></script>', ''));

	console.log(`END css extraction to ${lang}!`);
}

Promise.all([main(), main('en')]);
