import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_API_URL,
  },
  testDir: './tests',
  reporter: [['list'], ['html']],
});
