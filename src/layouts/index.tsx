import LayoutHeader from './LayoutHeader'
import LayoutSide from './LayoutSide'
import LayoutBreadcrumb from './Breadcrumb'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export default function Layout() {
  return (
    <div className='layout'>
      <LayoutHeader />
      <div className='body'>
        <LayoutSide />
        <div className='content'>
          <LayoutBreadcrumb />
          <div className='page'>
            <Suspense fallback='loading...'>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
