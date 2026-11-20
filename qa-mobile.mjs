export default async function run(page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:4173", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shot-mobile-final.png" });
  const h1 = await page.locator("h1").first().boundingBox();
  const nav = await page.locator("header, nav").first().boundingBox();
  const hero = await page.locator("img[alt='Home in Pretoria']").boundingBox();
  return { h1, nav, hero, overlap: h1 && nav ? h1.y < nav.y + nav.height : null };
}
