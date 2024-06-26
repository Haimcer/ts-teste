import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm run dev',
    port: 5173,
  },
  testDir: 'tests',
  testMatch: /(.+.)?(test|spec).[jt]s/,
  use: {
    headless: false,
  },
};

export default config;
