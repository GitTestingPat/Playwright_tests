import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  await page.getByPlaceholder('Search Keywords').click();
  await page.getByPlaceholder('Search Keywords').fill('Hola');
  await page.getByPlaceholder('Search Keywords').press('Enter');
  await page.getByRole('heading', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByLabel('First name:').click();
  await page.getByLabel('First name:').fill('Patricio');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('Gallardo');
  await page.getByLabel('Enquiry:').click();
  await page.getByLabel('Enquiry:').fill('Hola Mundo');
  await page.getByRole('button', { name: ' Submit' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('gittestingpat@gmail.com');
  await page.getByRole('button', { name: ' Submit' }).click();
});