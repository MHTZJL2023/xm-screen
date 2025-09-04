export default [
  {
    path: '/safeProduction',
    name: 'safeProduction',
    meta: { title: '安全生产' },
    component: () => import('@/views/safeProduction/index.vue'),
  },
  {
    path: '/safeOperations',
    name: 'safeOperations',
    meta: { title: '安全运营' },
    component: () => import('@/views/safeOperations/index.vue'),
  },
  {
    path: '/improvingReform',
    name: 'improvingReform',
    meta: { title: '改善改革' },
    component: () => import('@/views/improvingReform/index.vue'),
  },
  {
    path: '/productivity',
    name: 'productivity',
    meta: { title: '生产绩效' },
    component: () => import('@/views/productivity/index.vue'),
  },
  {
    path: '/productionAnomaly',
    name: 'productionAnomaly',
    meta: { title: '生产异常' },
    component: () => import('@/views/productionAnomaly/index.vue'),
  },
  {
    path: '/processQuality',
    name: 'processQuality',
    meta: { title: '制程质量' },
    component: () => import('@/views/processQuality/index.vue'),
  },
];
