import { test, expect } from '@playwright/test';
// Test with an email address already registered

test('test', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  await page.getByRole('link', { name: 'Login or register' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#AccountFrm_firstname').click();
  await page.locator('#AccountFrm_firstname').fill('jose');
  await page.locator('#AccountFrm_lastname').click();
  await page.locator('#AccountFrm_lastname').fill('soto');
  await page.locator('#AccountFrm_email').click();
  await page.locator('#AccountFrm_email').fill('jose145@');
  await page.locator('#AccountFrm_email').press('Shift+F2');
  await page.locator('#AccountFrm_email').fill('jose145@gmail.coim'); // email address already registered
  await page.locator('#AccountFrm_telephone').click();
  await page.locator('#AccountFrm_telephone').fill('+123456789');
  await page.locator('#AccountFrm_fax').click();
  await page.locator('#AccountFrm_company').click();
  await page.locator('#AccountFrm_company').fill('freelance');
  await page.locator('#AccountFrm_address_1').click();
  await page.locator('#AccountFrm_address_1').fill('los olmos 5');
  await page.locator('#AccountFrm_address_1').click();
  await page.locator('#AccountFrm_address_1').fill('los naranjos 5');
  await page.locator('#AccountFrm_address_2').click();
  await page.locator('#AccountFrm_address_2').fill('depto 12');
  await page.locator('#AccountFrm_city').click();
  await page.locator('#AccountFrm_city').click();
  await page.locator('div:nth-child(4) > .input-group > .input-group-addon').click();
  await page.locator('div:nth-child(4) > .input-group > .input-group-addon > .required').click();
  await page.locator('#AccountFrm_city').click();
  await page.locator('#AccountFrm_city').fill('los alamos');
  await page.locator('#AccountFrm_zone_id').selectOption('3513');
  await page.locator('#AccountFrm_postcode').click();
  await page.locator('#AccountFrm_postcode').fill('125879');
  await page.locator('#AccountFrm_country_id').selectOption('226');
  await page.locator('#AccountFrm_zone_id').selectOption('3713');
  await page.locator('#AccountFrm_loginname').click();
  await page.locator('#AccountFrm_loginname').fill('josesoto');
  await page.locator('#AccountFrm_password').click();
  await page.locator('#AccountFrm_password').fill('123456');
  await page.locator('#AccountFrm_confirm').click();
  await page.locator('#AccountFrm_confirm').fill('123456');
  await page.getByLabel('No').check();
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('link', { name: ' Continue' }).click();

});
