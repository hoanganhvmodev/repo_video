import { useLoginMutation } from '@redux/slices/auth/authSliceApi'
import { saveLocalToken } from '@utils/auth'
import { useAppDispatch } from '@redux/store'
import { setCredentials, logout as logoutStore } from '@redux/slices/auth/authSlice'

export const useAuth = function () {
  const [loginGoogleApi] = useLoginMutation()
  const dispatch = useAppDispatch()

  async function loginWithGoogle(token: string) {
    try {
      const resp = await loginGoogleApi({
        access_token: token
      }).unwrap()

      const { refresh_token, token: accessToken, user } = resp
      saveLocalToken(accessToken, refresh_token)
      dispatch(
        setCredentials({
          token: accessToken,
          user: user
        })
      )
    } catch (error) {}
  }

  async function logout() {
    // TODO : call API logout
    dispatch(logoutStore())
  }
  
  return { loginWithGoogle, logout }
}
