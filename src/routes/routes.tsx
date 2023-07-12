import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@pages/login'
import Hello from '@components/Hello/Hello'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hello />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
