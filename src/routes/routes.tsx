import FormChapter from '@components/FormChapter/FormChapter'
import FormCourse from '@components/FormCourse/FormCourse'
import FormVideo from '@components/FormVideo/FormVideo'
import AdminLayout from '@layouts/AdminLayout'
import HomePage from '@pages/home'
import LoginPage from '@pages/login'
import StudyPage from '@pages/study'
import { createBrowserRouter } from 'react-router-dom'

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
        element: <FormCourse />
      },
      {
        // for test
        path: '/admin/chapter/create',
        element: <FormChapter />
      },
      {
        // for test
        path: '/admin/video/create',
        element: <FormVideo />
      }
    ]
  }
])

export default router
