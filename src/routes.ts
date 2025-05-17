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
  {
    path: '/',
    element: 'Layout',
    breadcrumb: '后台',
    children: [
      { path: 'home', breadcrumb: '主页', element: 'PageHome' },
      {
        path: 'about',
        breadcrumb: '相关',
        element: 'Outlet',
        children: [
          { index: true, breadcrumb: '相关列表', element: 'PageAbout' },
          { path: 'add', breadcrumb: '相关新增', element: 'PageAboutAdd' },
          { path: 'edit/:id', breadcrumb: '相关编辑', element: 'PageAboutEdit' },
          { path: 'detail/:id', breadcrumb: '相关详情', element: 'PageAboutDetail' },
          { path: 'config', breadcrumb: '相关配置', element: 'PageAboutConfig' },
          { path: '*', element: 'RedirectIndex' },
        ],
      },
      {
        path: 'system',
        breadcrumb: '系统',
        element: 'Outlet',
        children: [
          { path: '1', breadcrumb: '系统1', element: 'PageSystemOne' },
          { path: '2', breadcrumb: '系统2', element: 'PageSystemTwo' },
          { path: '*', element: 'RedirectIndex' },
        ],
      },
    ],
  },
  { path: '/full-screen', element: 'FullScreen' },
]
