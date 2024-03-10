import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
  {
    key: 'apps.dashboard',
    path: `${APP_PREFIX_PATH}/dashboard`,
    component: lazy(() => import('@/views/crypto/Dashboard')),
    authority: [],
  },
  {
    key: 'apps.user',
    path: `${APP_PREFIX_PATH}/user`,
    component: lazy(() => import('@/views/crypto/StakingList')),
    authority: [],
  },
  {
    key: 'apps.userNew',
    path: `${APP_PREFIX_PATH}/user-new`,
    component: lazy(() => import('@/views/crypto/StakingNew')),
    authority: [],
  },
  {
    key: 'apps.userEdit',
    path: `${APP_PREFIX_PATH}/user-edit/:id`,
    component: lazy(() => import('@/views/crypto/StakingNew')),
    authority: [],
  },
  {
    key: 'apps.post',
    path: `${APP_PREFIX_PATH}/post`,
    component: lazy(() => import('@/views/crypto/PostList')),
    authority: [],
  },
  {
    key: 'apps.postView',
    path: `${APP_PREFIX_PATH}/post-view/:id`,
    component: lazy(() => import('@/views/crypto/PostView')),
    authority: [],
  },
  {
    key: 'apps.settings',
    path: `${APP_PREFIX_PATH}/account/settings/:tab`,
    component: lazy(() => import('@/views/account/Settings')),
    authority: [],
    meta: {
      header: 'Settings',
      headerContainer: true,
    },
  },
]

export default appsRoute
