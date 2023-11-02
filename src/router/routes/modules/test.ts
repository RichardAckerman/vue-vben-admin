import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const test: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/pdf',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '测试',
    orderNo: 100000,
  },
  children: [
    {
      path: 'test',
      name: 'TestPage',
      component: () => import('/@/views/sys/test/index.vue'),
      meta: {
        title: '测试',
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'pdf',
      name: 'TestPdf',
      component: () => import('/@/views/sys/test/pdf/index.vue'),
      meta: {
        title: 'PDF',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default test;
