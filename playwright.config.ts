import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.API_BASE_URL,
  },
  workers: process.env.CI ? 1 : undefined,
});
