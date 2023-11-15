import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fedirlatyshev.capacitorplugintesttask',
  appName: 'test-task-capacitor-plugin',
  webDir: 'dist/test-task-capacitor-plugin/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
