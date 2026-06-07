const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/');
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({path: 'screenshot.png'});
  console.log('Screenshot saved to screenshot.png');
  
  await browser.close();
})();
