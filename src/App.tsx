import { RouterProvider } from 'react-router-dom'
import './app.css'
import router from './routes/router'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div id='portal-root'></div>
    </>
  )
}
