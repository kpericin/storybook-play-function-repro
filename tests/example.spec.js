// @ts-check
const { test, expect } = require('@playwright/test');

const text = "this is a test";

// test('main app', async ({ page }) => {
//   await page.goto('http://localhost:5173');

//   await page.getByLabel('Text Input').click();
//   await page.getByLabel('Text Input').fill(text);
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByText(new RegExp(text)).click();
// });

test('storybook story', async ({ page }) => {
  await page.goto('http://localhost:6009/?path=/story/nativerhfinteraction--playwright-test-for-text-input');
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByLabel('Text Input').click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByLabel('Text Input').fill('this is a test');
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByRole('button', { name: 'Submit' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByText('Entered text: this is a test').click();
});
