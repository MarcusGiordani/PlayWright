import { test, expect } from '@playwright/test';

test('deve abrir a tela de cadastro', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  await expect(
    page.getByRole('heading', { name: 'Criar Conta' })
  ).toBeVisible();

  await expect(
    page.locator('input[type="email"]')
  ).toBeVisible();

  await expect(
    page.locator('input[type="password"]').first()
  ).toBeVisible();
});