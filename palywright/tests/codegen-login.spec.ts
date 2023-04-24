import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('#nav-signin-tooltip').getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or mobile phone number').fill('vishal.raj8546@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill('vishal123@');
  await page.getByRole('button', { name: 'Sign in' }).click();
});