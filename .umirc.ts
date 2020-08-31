import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    components: resolve(__dirname, './src/components'),
  },
  routes: [
    { path: '/', component: '@/layouts' },
    {
      path: '/home', component: '@/layouts', routes: [
        { name: 'login', path: '/home/test', component: '@/pages/test' },
        { name: 'login', path: '/home/test2', component: '@/pages/test2' },
      ]
    },
    { path: '/login', component: '@/pages/login' }
  ],
  title: 'admin'
});
