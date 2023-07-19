import { FC } from 'react'
import Header from '@components/Header/HeaderHomePage'
import { Box } from '@mui/material'
import Footer from '@components/Footer/Footer'
import { Outlet } from 'react-router-dom'

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = ({}) => {
  return (
    <div>
      <Box
        sx={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: 2,
          width: '100%'
        }}
      >
        <Header />
      </Box>
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout
