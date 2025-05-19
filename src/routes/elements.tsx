import { Navigate, Outlet } from 'react-router-dom'
import FullCenter from '../components/FullCenter'
import Layout from '../layouts'
import PageAbout from '../pages/about'
import PageAboutAdd from '../pages/about/add'
import PageAboutConfig from '../pages/about/config'
import PageAboutDetail from '../pages/about/detail'
import PageAboutEdit from '../pages/about/edit'
import PageChartDetail from '../pages/chart/detail'
import PageChartList from '../pages/chart/list'
import PageConfig from '../pages/config'
import ConfigModal from '../pages/config/modal'
import PageDashboard from '../pages/dashboard'
import PageHome from '../pages/home'
import PageScreen from '../pages/screen'
import PageSystemList from '../pages/system/list'
import PageSystemType from '../pages/system/[type]'

export const ElementMap = {
  Outlet: <Outlet />,
  Layout: <Layout />,
  Redirect403: <Navigate to='/43' replace />,
  Redirect404: <Navigate to='/404' replace />,
  RedirectScopedIndex: <Navigate to='../' replace />,
  RedirectParent403: <Navigate to='../403' replace />,
  RedirectParent404: <Navigate to='../404' replace />,
  RedirectScopedHome: <Navigate to='./home' replace />,
  RedirectScopedList: <Navigate to='./list' replace />,
  RedirectRoot403: <Navigate to='/403' replace />,
  RedirectRoot404: <Navigate to='/404' replace />,

  PageHome: <PageHome />,
  PageDashboard: <PageDashboard />,
  PageAbout: <PageAbout />,
  PageAboutAdd: <PageAboutAdd />,
  PageAboutEdit: <PageAboutEdit />,
  PageAboutDetail: <PageAboutDetail />,
  PageAboutConfig: <PageAboutConfig />,
  PageSystemList: <PageSystemList />,
  PageSystemType: <PageSystemType />,
  PageConfig: <PageConfig />,
  ConfigModal: <ConfigModal />,
  PageChartList: <PageChartList />,
  PageChartDetail: <PageChartDetail />,

  PageScreen: <PageScreen />,
  Page403: <FullCenter>403</FullCenter>,
  Page404: <FullCenter>404</FullCenter>,
} as const

export type ElementKey = keyof typeof ElementMap
