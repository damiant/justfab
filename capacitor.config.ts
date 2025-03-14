import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'builder.justfab',
  appName: 'JustFab',
  webDir: 'dist',
  server: {
    allowNavigation: ['*'],
    cleartext: true,
    errorPath: 'error.html',
  },
};

export default config;
