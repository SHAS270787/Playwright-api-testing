import { test, expect } from '@playwright/test';

test('GET list of users returns correct structure', async ({ request }) => {
  const response = await request.get('/users'); // Matches Beeceptor rule
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('data'); // Based on your mocked response
});
