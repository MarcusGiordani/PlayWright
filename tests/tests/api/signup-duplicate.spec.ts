import { test, expect } from '@playwright/test';

test('signup duplicado', async ({ request }) => {
  const email = `dup${Date.now()}@gmail.com`;

  await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email,
        password: '123456'
      }
    }
  );

  const response = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email,
        password: '123456'
      }
    }
  );

  expect(response.status()).toBeGreaterThanOrEqual(400);
});