import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@pages/login'
import HomePage from '@pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router