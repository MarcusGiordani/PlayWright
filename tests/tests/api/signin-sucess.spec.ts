import { test, expect } from '@playwright/test';

test('signin válido', async ({ request }) => {
  const email = `login${Date.now()}@gmail.com`;
  const password = 'Senha@123';

  const signupResponse = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email,
        password
      }
    }
  );

  expect(signupResponse.status()).toBeLessThan(300);

  const signinResponse = await request.post(
    'http://localhost:8080/auth/signin',
    {
      data: {
        email,
        password
      }
    }
  );

  expect(signinResponse.status()).toBeLessThan(300);
});