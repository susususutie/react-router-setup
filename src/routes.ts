import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'
import type { ElementKey } from './routes/elements'

type PlainIndexRouterObject = Omit<IndexRouteObject, 'element'> & {
  breadcrumb?: string | undefined
  element?: ElementKey | undefined
}
type PlainNonIndexRouteObject = Omit<NonIndexRouteObject, 'element' | 'children'> & {
  breadcrumb?: string | undefined
  element?: ElementKey | undefined
  children?: PlainRouteObject[]
}
export type PlainRouteObject = PlainIndexRouterObject | PlainNonIndexRouteObject

export const plainRoutes: PlainRouteObject[] = [
  // 后台管理页面，包裹 layout
  {
    path: '/',
    element: 'Layout',
    breadcrumb: '后台',
    children: [
      { index: true, breadcrumb: '主页', element: 'RedirectScopedHome' },
      { path: 'home', breadcrumb: '主页', element: 'PageHome' },
      { path: 'dashboard', breadcrumb: '主页', element: 'PageDashboard' },
      {
        path: 'about',
        breadcrumb: '相关',
        element: 'Outlet',
        children: [
          // index: true === path: '' 对应路径 /about | /about/
          { index: true, breadcrumb: '相关列表', element: 'PageAbout' },
          { path: 'add', breadcrumb: '相关新增', element: 'PageAboutAdd' },
          { path: 'edit/:id', breadcrumb: '相关编辑', element: 'PageAboutEdit' },
          { path: 'detail/:id', breadcrumb: '相关详情', element: 'PageAboutDetail' },
          { path: 'config', breadcrumb: '相关配置', element: 'PageAboutConfig' },
          { path: '*', element: 'RedirectScopedIndex' },
        ],
      },
      {
        path: 'system',
        breadcrumb: '系统',
        element: 'Outlet',
        children: [
          { index: true, breadcrumb: '系统列表', element: 'PageSystemIndex' },
          { path: ':type', breadcrumb: '系统1|2', element: 'PageSystemType' },
          { path: '404', breadcrumb: '相关404', element: 'Page404' },
          { path: '*', element: 'RedirectScoped404' },
        ],
      },
      {
        path: 'config',
        breadcrumb: '配置',
        element: 'PageConfig',
        children: [{ path: 'modal', breadcrumb: '配置弹窗', element: 'ConfigModal' }],
      },
    ],
  },
  // 以下页面为单独页面，不包裹 layout，可作为大屏、全屏404页面
  { path: '/403', element: 'Page403' },
  { path: '/404', element: 'Page404' },
  { path: '/screen', element: 'PageScreen' },
]
