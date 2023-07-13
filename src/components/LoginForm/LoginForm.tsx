import LogoGoogle from '@assets/images/logo-google.png'
import LogoVMO from '@assets/images/logo-vmo.png'
import { useAuth } from '@hooks/useAuth'
import { Box, Button, Paper, Typography } from '@mui/material'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { FC } from 'react'
import styles from './LoginForm.module.css'

const LoginForm: FC = () => {
  const { loginWithGoogle } = useAuth()

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse: any) => {
      const token = tokenResponse.access_token || ''
      console.log(tokenResponse)

      const response = await fetch(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`
      )
      const data = await response.json()
      const idToken = data.id_token || ''

      console.log('id_token:', data)

      console.log('access_token:', token)

      await loginWithGoogle(token as string)
    }
  })

  return (
    <div className={styles['background']}>
      <div className={styles['wrapper-filter']}></div>
      <Paper
        sx={{ borderRadius: '20px', py: 10, boxShadow: 4 }}
        style={{ width: '700px', zIndex: 2 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={LogoVMO} alt='Logo VMO' className={styles['logo-vmo']} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          {/* <Button
            sx={{ boxShadow: 4, px: 7, borderRadius: '0px' }}
            onClick={() => {
              login()
            }}
          >
            <img
              src={LogoGoogle}
              alt='Logo Google'
              className={styles['logo-google']}
            />
            <Typography variant='h5' color='initial'>
              Đăng nhập với Google
            </Typography>
          </Button> */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
            size='large'
            width='700px'
          />
        </Box>
      </Paper>
    </div>
  )
}

export default LoginForm