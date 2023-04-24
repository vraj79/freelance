import { test, expect } from '@playwright/test';

// accepting alert
test("Handling Alert 1",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog",async(alert)=>{
        // printing alert msg;
        const alertText=alert.message();
        console.log(alertText);
        // accepting the alert 
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click()
})

test("Handling Alert 2",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog",async(alert)=>{
        // printing alert msg;
        const alertText=alert.message();
        console.log(alertText);
        // accepting the alert 
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click()
    const res=page.locator("//p[text()='You pressed OK!']");
    await expect(res).toHaveText("You pressed OK!")
})

// dismissing the alert
test("Handling Alert 3",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog",async(alert)=>{
        // printing alert msg;
        const alertText=alert.message();
        console.log(alertText);
        // dismissing the alert 
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click()
    const res=page.locator("#confirm-demo");
    await expect(res).toContainText("Cancel!")
})

// accepting alert having input box
test("Handling Alert 4",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog",async(alert)=>{
        const alertText=alert.defaultValue();
        console.log(alertText);
        await alert.accept("Enter name");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click()

    const res=page.locator("#prompt-demo");
    await expect(res).toContainText("Enter name")
})
