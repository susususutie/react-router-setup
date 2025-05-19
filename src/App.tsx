import { plainRoutes, type PlainRouteObject } from './routes/routes'
import { useRoutes, type RouteObject } from 'react-router-dom'
import { ElementMap } from './routes/elements'

function getRouteObjects(plainRouteObjects: PlainRouteObject[]): RouteObject[] {
  return plainRouteObjects.map(item => {
    if (item.index) {
      return { ...item, element: item.element ? ElementMap[item.element] : null }
    } else {
      return {
        ...item,
        element: item.element ? ElementMap[item.element] : null,
        children: item.children?.length ? getRouteObjects(item.children) : undefined,
      }
    }
  })
}

const routeObjects = getRouteObjects(plainRoutes)

function App() {
  const elements = useRoutes(routeObjects)
  return elements
}

export default App
