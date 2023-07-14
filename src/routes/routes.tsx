import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@pages/login'
import HomePage from '@pages/home'
import StudyPage from '@pages/study'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/study',
    element: <StudyPage />
  }
])

export default router
