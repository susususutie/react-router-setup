import { Link } from 'react-router-dom'

export default function NavigateLinks() {
  const pathnames = [
    {
      title: '全屏页面',
      items: ['/403', '/404', '/screen'],
    },
    {
      title: '后台页面',
      items: ['/', '/home', '/dashboard'],
    },
    {
      title: 'About',
      items: [
        '/about',
        '/about/',
        '/about/add',
        '/about/detail/1',
        '/about/edit/1',
        '/about/detail/asd',
        '/about/config',
        '/about/asd',
      ],
    },
    {
      title: 'System',
      items: ['/system', '/system/1', '/system/2', '/system/3'],
    },
    {
      title: 'Config',
      items: ['/config', '/config/modal'],
    },
  ]
  return (
    <div style={{ marginTop: 24, border: '1px solid #b3b3b3', padding: 24 }}>
      {pathnames.map(item => (
        <div key={item.title}>
          <h4>{item.title}</h4>
          <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {item.items.map(link => (
              <Link key={link} to={link}>
                {link}
              </Link>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}
