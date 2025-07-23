// helpers/apiClient.ts
import { APIRequestContext, request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_API_URL || 'https://reqres.in/api';

export async function createApiClient(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
}
