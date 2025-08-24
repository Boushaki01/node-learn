import puppeteer from 'puppeteer';
import readlineSync from 'readline-sync';

(async () => {
  let testingSatu = readlineSync.question('testingSatu: ');
  let testingDua = readlineSync.question('testingDua: ');
  let testingTiga = readlineSync.question('testingTiga: ');

  // Launch browser non-headless biar kelihatan
  const browser = await puppeteer.launch({
    headless: false, // set ke false
    slowMo: 50, // biar kelihatan step per step
  });

  const page = await browser.newPage();

  // buka link form
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdRZSwkpqVAGxBIlV5VCqxwRgzYHQzKqv3PO39FTs4GqhKVtQ/viewform', {
    waitUntil: 'networkidle2',
  });

  /// ...existing code...
  const satuField = await page.$('input[aria-label="Testing 1 (text)"]');
  if (satuField) {
    await satuField.type(testingSatu);
  }

  const duaField = await page.$('input[aria-label="Testing 2 (text)"]');
  if (duaField) {
    await duaField.type(testingDua);
  }

  const tigaField = await page.$('input[aria-label="Testing 3 (text)"]');
  if (tigaField) {
    await tigaField.type(testingTiga);
  }

  await browser.close();
  // ...existing code...
})();
