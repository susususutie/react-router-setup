import { Link, Outlet } from 'react-router-dom'
import NavigateLinks from '../../components/NavigateLinks'

export default function PageConfig() {
  return (
    <div>
      PageConfig
      <p>
        打开 <Link to='./modal'>modal</Link> <Link to='./confirm'>confirm</Link>
      </p>
      <Outlet /> <NavigateLinks />
    </div>
  )
}
