import 'dotenv/config';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { commonDark, commonLight } from 'naive-ui';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    __DEV__: JSON.stringify('false'),
    commonDark: JSON.stringify(commonDark),
    commonLight: JSON.stringify(commonLight),
  },
  test: {
    includeSource: ['src/**/*.{js,tsx,jsx,tsx,vue}'],
    environment: 'node',
  },
});
