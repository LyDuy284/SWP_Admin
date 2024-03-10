import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
  {
    key: 'apps',
    path: '',
    title: 'APPS',
    translateKey: 'nav.apps',
    icon: 'apps',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [],
    subMenu: [
      {
        key: 'apps.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'Trang chủ',
        translateKey: 'dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
      },
      {
        key: 'apps.user',
        path: `${APP_PREFIX_PATH}/user`,
        title: 'Người dùng',
        translateKey: 'User',
        icon: 'user',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
      },
      {
        key: 'apps.post',
        path: `${APP_PREFIX_PATH}/post`,
        title: 'Bài viết',
        translateKey: 'post',
        icon: 'post',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
      },
    ],
  },
]

export default appsNavigationConfig
