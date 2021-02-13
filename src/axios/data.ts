interface ITabBar {
  id: number;
  label: string;
  icon: string;
  path: string;
}
export let tabBarList: ITabBar[] = [
  {
    id: 0,
    label: '首页',
    icon: 'icon-shouye',
    path: '/home'
  },
  {
    id: 1,
    label: '发现',
    icon: 'icon-icon-test',
    path: '/find'
  },
  {
    id: 2,
    label: '相册',
    icon: 'icon-shipin',
    path: '/photo'
  },
  {
    id: 3,
    label: '我的',
    icon: 'icon-wode',
    path: '/profile'
  }
]