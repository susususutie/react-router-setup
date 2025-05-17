import Layout from '../layouts'
import PageHome from '../pages/home'
import PageFullScreen from '../pages/full-screen'
import PageAbout from '../pages/about'
import PageAboutAdd from '../pages/about/add'
import PageAboutConfig from '../pages/about/config'
import PageAboutDetail from '../pages/about/detail'
import PageAboutEdit from '../pages/about/edit'
import PageSystemOne from '../pages/system/one'
import PageSystemTwo from '../pages/system/two'
import { Navigate, Outlet } from 'react-router-dom'

export const ElementMap = {
  Layout: <Layout />,
  Redirect404: <Navigate to='/404' replace />,
  RedirectIndex: <Navigate to='../' replace />,
  Outlet: <Outlet />,

  PageHome: <PageHome />,
  PageAbout: <PageAbout />,
  PageAboutAdd: <PageAboutAdd />,
  PageAboutEdit: <PageAboutEdit />,
  PageAboutDetail: <PageAboutDetail />,
  PageAboutConfig: <PageAboutConfig />,
  PageSystemOne: <PageSystemOne />,
  PageSystemTwo: <PageSystemTwo />,

  FullScreen: <PageFullScreen />,
} as const

export type ElementKey = keyof typeof ElementMap
