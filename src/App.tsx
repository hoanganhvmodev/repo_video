import { GoogleOAuthProvider } from '@react-oauth/google'
import store from '@redux/store'
import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import i18nConfig from './configs/i18nConfig'
import router from './routes/routes'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@configs/MUIconfig'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <Provider store={store}>
          <I18nextProvider i18n={i18nConfig} defaultNS={'translation'}>
            <RouterProvider
              router={router}
              fallbackElement={<div></div>}
            ></RouterProvider>
          </I18nextProvider>
        </Provider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}
export default App
