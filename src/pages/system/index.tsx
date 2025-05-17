import { Link } from 'react-router-dom'
import NavigateLinks from '../../components/NavigateLinks'

export default function PageSystemIndex() {
  return <div>PageSystemIndex 
    <ul>
      <li>
        <Link to="./1" >One</Link>
      </li>
      <li>
        <Link to='./2'>Two</Link>
      </li>
    </ul>

    <NavigateLinks />
  </div>
}
