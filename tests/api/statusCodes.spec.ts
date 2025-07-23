import { test, expect } from '@playwright/test';

const baseURL = 'https://status-api.beeceptor.com'; // your Beeceptor endpoint
const statuses = [200, 201, 400, 401, 403, 404, 500];

test.describe('Validate HTTP status codes via Beeceptor', () => {
  for (const code of statuses) {
    test(`GET ${code} - should return ${code}`, async ({ request }) => {
      const response = await request.get(`${baseURL}/${code}`);
      expect(response.status()).toBe(code);
    });
  }
});
