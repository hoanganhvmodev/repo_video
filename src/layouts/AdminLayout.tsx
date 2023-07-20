import { Box } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@components/Header/HeaderHomePage'
// import Footer from '@components/Footer/Footer'
import Cms from '@components/Cms/Cms'

interface AdminLayoutProps {}

const AdminLayout: FC<AdminLayoutProps> = ({}) => {
  return (
    <>
      <Box sx={{ overflow: 'hidden', height: '100vh' }}>
        <Header disableSearch={true} />
        <Cms childrenComponent={<Outlet />} />
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default AdminLayout
