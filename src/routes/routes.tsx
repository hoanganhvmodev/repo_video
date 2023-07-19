import FormChapter from '@components/FormChapter/FormChapter'
import FormCourse from '@components/FormCourse/FormCourse'
import FormVideo from '@components/FormVideo/FormVideo'
import AdminLayout from '@layouts/AdminLayout'
import LoginPage from '@pages/login'
import StudyPage from '@pages/study'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@components/HomePage/HomePage'
import DefaultLayout from '@layouts/DefaultLayout'
import Middleware from '@middleware/index'
import StudyLayout from '@layouts/StudyLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Middleware
        listMiddleware={[
          {
            name: 'AuthenMiddleware',
            props: { needAuth: true }
          }
        ]}
      >
        <DefaultLayout />
      </Middleware>
    ),
    children: [{ index: true, element: <HomePage /> }]
  },
  {
    path: '/login',

    element: (
      <Middleware
        listMiddleware={[
          {
            name: 'AuthenMiddleware',
            props: { needAuth: false }
          }
        ]}
      >
        <LoginPage />
      </Middleware>
    )
  },
  {
    path: '/study',
    element: (
      <Middleware
        listMiddleware={[
          {
            name: 'AuthenMiddleware',
            props: { needAuth: true }
          }
        ]}
      >
        <StudyLayout />
      </Middleware>
    ),
    children: [{ index: true, element: <StudyPage /> }]
  },

  {
    path: '/admin',
    element: (
      <Middleware
        listMiddleware={[
          {
            name: 'AuthenMiddleware',
            props: { needAuth: true }
          }
        ]}
      >
        <AdminLayout />
      </Middleware>
    ),
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
