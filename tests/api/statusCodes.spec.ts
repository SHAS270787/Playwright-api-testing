import { test, expect } from '@playwright/test';

const baseURL = 'https://httpstat.us';

test.describe('Validate Common HTTP Status Codes using httpstat.us', () => {
  const testCases = [
    { code: 200, method: 'GET' },
    { code: 201, method: 'GET' },
    { code: 400, method: 'GET' },
    { code: 401, method: 'GET' },
    { code: 403, method: 'GET' },
    { code: 404, method: 'GET' },
    { code: 500, method: 'GET' },
  ];

  for (const { code, method } of testCases) {
    test(`${method} ${code} - ${httpStatusText(code)}`, async ({ request }) => {
      const response = await request[method.toLowerCase()](`${baseURL}/${code}`);
      expect(response.status()).toBe(code);
    });
  }
});

function httpStatusText(code: number) {
  return {
    200: 'OK',
    201: 'Created',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
  }[code] || 'Unknown';
}
