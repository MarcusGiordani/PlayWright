import { test, expect } from '@playwright/test';

test('não deve permitir curtir sem autenticação', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: /curtir/i }).first().click();

  await expect(
    page.getByRole('button', { name: 'Entrar' })
  ).toBeVisible();
});