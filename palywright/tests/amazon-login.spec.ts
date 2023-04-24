import { chromium, test } from '@playwright/test';

test("Login test Demo",async()=>{
   const browser=await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();

   await page.goto("https://www.amazon.in/")
   await page.hover(".nav-progressive-attribute")
   await page.click("text=Sign in")
   await page.fill("//input[contains(@class,'a-input-text a-span12')]","vishal.raj8546@gmail.com");
   await page.click("(//input[@id='continue'])[1]");
   await page.fill("//input[contains(@class,'a-input-text a-span12')]","vishal123@");
   await page.click("(//label[text()[normalize-space()='Password']]/following::input)[3]")
})