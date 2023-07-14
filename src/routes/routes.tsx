import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@pages/login'
import HomePage from '@pages/home'
import StudyPage from '@pages/study'
import AdminLayout from '@layouts/AdminLayout'
import FormCreateCourse from '@components/FormCreateCourse/FormCreateCourse'

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
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      {
        // for test
        path: '/admin/course/create',
        element: <FormCreateCourse />
      }
    ]
  }
])

export default router
