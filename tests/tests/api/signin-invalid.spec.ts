import { test, expect } from '@playwright/test';

test('signin inválido', async ({ request }) => {
  const response = await request.post(
    'http://localhost:8080/auth/signin',
    {
      data: {
        email: 'naoexiste@gmail.com',
        password: '123456'
      }
    }
  );

  expect(response.status()).toBeGreaterThanOrEqual(400);
});