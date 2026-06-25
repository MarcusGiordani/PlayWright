import { test, expect } from '@playwright/test';

test('signup com sucesso', async ({ request }) => {
  const response = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email: `user${Date.now()}@gmail.com`,
        password: 'Senha@123'
      }
    }
  );

  expect(response.status()).toBeLessThan(300);
});