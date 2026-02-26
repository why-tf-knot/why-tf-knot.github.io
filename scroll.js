const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8001/index_new.html');
  await page.setViewport({width: 1920, height: 1080});
  
  // Scroll and capture sections
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.screenshot({path: 'about-section.png'});
  
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(500);
  await page.screenshot({path: 'projects-section.png'});
  
  await browser.close();
})();
