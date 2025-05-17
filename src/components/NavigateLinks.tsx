import { Link } from 'react-router-dom'

export default function NavigateLinks() {
  const pathnames = [
    '/',
    '/home',
    '/about',
    '/about/',
    '/about/add',
    '/about/detail/1',
    '/about/edit/1',
    '/about/detail/asd',
    '/about/config',
    '/about/asd',
    '/system',
    '/system/1',
    '/system/2',
    '/system/3',
    '/full-screen',
  ]
  return (
    <div>
      {pathnames.map(item => (
        <>
          <Link to={item}>{item}</Link> <br />
        </>
      ))}
    </div>
  )
}
