const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  
  await page.evaluateOnNewDocument(() => {
    window.addEventListener('error', e => {
      console.log('Global Error:', e.message);
    });
  });

  await page.goto('http://localhost:5173/');
  await new Promise(r => setTimeout(r, 1000));
  
  // Click the Menu button to open sidebar
  await page.click('.mobile-menu-btn');
  await new Promise(r => setTimeout(r, 500));
  
  // Find and click "Lesson 6"
  const elements = await page.$$('li');
  for (const el of elements) {
    const text = await page.evaluate(e => e.textContent, el);
    if (text.includes('Lesson 6')) {
      console.log('Clicking Lesson 6');
      await el.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  
  await browser.close();
})();
