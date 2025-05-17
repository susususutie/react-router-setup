import Layout from '../layouts'
// import PageHome from '../pages/home'
// import PageDashboard from '../pages/dashboard'
import PageScreen from '../pages/screen'
// import PageAbout from '../pages/about'
// import PageAboutAdd from '../pages/about/add'
// import PageAboutConfig from '../pages/about/config'
// import PageAboutDetail from '../pages/about/detail'
// import PageAboutEdit from '../pages/about/edit'
// import PageSystemIndex from '../pages/system'
// import PageSystemType from '../pages/system/[type]'
import { Navigate, Outlet } from 'react-router-dom'
import FullCenter from '../components/FullCenter'
import React, { lazy, Suspense, type JSX } from 'react'

const PageHome = lazy(() => import('../pages/home'))
const PageDashboard = lazy(() => import('../pages/dashboard'))
const PageAbout = lazy(() => import('../pages/about'))
const PageAboutAdd = lazy(() => import('../pages/about/add'))
const PageAboutConfig = lazy(() => import('../pages/about/config'))
const PageAboutDetail = lazy(() => import('../pages/about/detail'))
const PageAboutEdit = lazy(() => import('../pages/about/edit'))
const PageSystemIndex = lazy(() => import('../pages/system'))
const PageSystemType = lazy(() => import('../pages/system/[type]')) 
const PageConfig = lazy(() => import('../pages/config'))
const ConfigModal = lazy(() => import('../pages/config/modal'))

export const ElementMap = {
  Layout: <Layout />,
  Redirect404: <Navigate to='/404' replace />,
  RedirectScopedIndex: <Navigate to='../' replace />,
  RedirectScoped404: <Navigate to='../404' replace />,
  RedirectScopedHome: <Navigate to='../home' replace />,
  Outlet: <Outlet />,

  PageHome: <PageHome />,
  PageDashboard: <PageDashboard />,
  PageAbout: <PageAbout />,
  PageAboutAdd: <PageAboutAdd />,
  PageAboutEdit: <PageAboutEdit />,
  PageAboutDetail: <PageAboutDetail />,
  PageAboutConfig: <PageAboutConfig />,
  PageSystemIndex: <PageSystemIndex />,
  PageSystemType: <PageSystemType />, 
  PageConfig: <PageConfig />,
  ConfigModal: <ConfigModal />,

  PageScreen: <PageScreen />,
  Page403: <FullCenter>403</FullCenter>,
  Page404: <FullCenter>404</FullCenter>,
} as const

export type ElementKey = keyof typeof ElementMap
