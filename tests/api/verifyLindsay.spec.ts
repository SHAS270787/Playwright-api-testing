import { test, expect } from '@playwright/test';

test('Verify Lindsay Ferguson exists in user list', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  console.log('Status:', response.status());
  expect(response.status()).toBe(200);

  const body = await response.json();
  const names = body.data.map((user: any) => `${user.first_name} ${user.last_name}`);
  expect(names).toContain('Lindsay Ferguson');
});
