interface AppConfig {
  apiBaseURL: string;
  userAgent: { [key: string]: string };
  env: 'prod' | 'test';
}

export const config: AppConfig = {
  apiBaseURL: 'https://world.openfoodfacts.org/cgi',
  userAgent: {
    'User-Agent': 'TestApp - App - Version 0.1 - https://mariusreimer.com',
  },
  env: 'test',
};
