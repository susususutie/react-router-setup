import  {
  isPlainIndexRouter,
  isPlainNonIndexRoute,
  type PlainNonIndexRouteObject,
  type PlainRouteObject,
} from '../routes/plain-routes'

export default function flatPlainRoutes(
  routes: PlainRouteObject[],
  parent?: { path?: string; elementPath?: PlainNonIndexRouteObject['element'][] }
) {
  type FlatRouteItem = Pick<PlainNonIndexRouteObject, 'breadcrumb'> & {
    path: string
    elementPath?: PlainNonIndexRouteObject['element'][]
  }
  const flatRoutes: FlatRouteItem[] = []

  const parentPath = parent?.path || ''
  const parentElementPath = parent?.elementPath || []
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]

    const item: FlatRouteItem = { path: '' }
    if (route.breadcrumb) {
      item.breadcrumb = route.breadcrumb
    }
    if (isPlainIndexRouter(route)) {
      item.path = parentPath
    }
    if (isPlainNonIndexRoute(route)) {
      item.path = parentPath ? `${parentPath}/${route.path}`.replace(/\/+/g, '/') : route.path!
    }
    item.elementPath = parentElementPath.concat(route.element || [])
    flatRoutes.push(item)
    if (route.children?.length) {
      const flatChildren = flatPlainRoutes(route.children, { path: item.path, elementPath: item.elementPath })
      flatRoutes.push(...flatChildren)
    }
  }
  return flatRoutes
}
