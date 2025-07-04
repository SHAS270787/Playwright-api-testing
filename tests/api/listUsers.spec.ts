import { test, expect } from '@playwright/test';
import { validateUser } from '../../helpers/apiHelpers';

test('GET list of users returns correct structure', async ({ request }) => {
  const response = await request.get('/api/users?page=2'); // Adjusted path

  console.log('Request URL:', response.url());
  console.log('Status:', response.status());
  console.log('Content-Type:', response.headers()['content-type']);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('data');
  expect(Array.isArray(body.data)).toBe(true);
  expect(body.data.length).toBeGreaterThan(0);

  body.data.forEach(validateUser);
});