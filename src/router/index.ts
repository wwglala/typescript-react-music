/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react'
export default [
  {
    path: '/home',
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/find',
    component: lazy(() => import('../pages/find'))
  },
  {
    path: '/photo',
    component: lazy(() => import('../pages/photo'))
  },
  {
    path: '/profile',
    component: lazy(() => import('../pages/profile'))
  },
  {
    path: '/search',
    component: lazy(() => import('../pages/search'))
  },
  {
    path: '/test',
    component: lazy(() => import('../pages/test/test'))
  },

]