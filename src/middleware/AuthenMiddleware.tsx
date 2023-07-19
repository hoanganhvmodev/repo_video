import { selectToken, setToken } from '@redux/slices/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { FC, ReactNode } from 'react'
import {
  Navigate,
  useLocation,
  useSearchParams
} from 'react-router-dom'
interface AuthenMiddlewareProps {
  children: ReactNode
  needAuth?: boolean
}

const AuthenMiddleware: FC<AuthenMiddlewareProps> = ({
  children,
  needAuth
}) => {
  const token = useAppSelector(selectToken)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  if (!token) {
    const tokenInLS = localStorage.getItem('access_token')
    if (tokenInLS) {
      dispatch(setToken(tokenInLS))
    }
  }

  const isLoggedIn = !!token

  if (isLoggedIn) {
    if (!needAuth) {
      return <Navigate to={`${searchParams.get('redirect')}`} replace={true} />
    }
  } else if (needAuth) {
    const redirectAfterLogin = location.pathname
    return (
      <Navigate to={`/login?redirect=${redirectAfterLogin}`} replace={true} />
    )
  }

  return children
}

export default AuthenMiddleware
