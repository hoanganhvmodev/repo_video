import { useLoginMutation } from '@redux/slices/auth/authSliceApi'

export const useAuth = function () {
  const [loginGoogleApi] = useLoginMutation()

  async function loginWithGoogle(token: string) {
    try {
      const resp = await loginGoogleApi({
        token
      }).unwrap()

      console.log(resp)
    } catch (error) {}
  }

  return { loginWithGoogle }
}
