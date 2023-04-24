import { test, expect } from '@playwright/test';

test("inputBox 1",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput=page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log("Before Entering",await messageInput.inputValue())
    await messageInput.type("Hi Vishal Raj");
    console.log("After Entering",await messageInput.inputValue())
})

test('inputBox 2',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1=page.locator("#sum1")
    const sum2=page.locator("#sum2")

    const getValueBtn=page.locator("form#gettotal>button")

    await sum1.type("123")
    await sum2.fill("456")
    await getValueBtn.click();
    const res=page.locator("#addmessage");
    
    await expect(res).toHaveText("579")
})

test("Checkbox Test",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkBox=await page.locator("#isAgeSelected");
    expect(checkBox).not.toBeChecked();
    await checkBox.click();
    
    await expect(checkBox).toBeChecked();
})