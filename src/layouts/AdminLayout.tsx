import { Box } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface AdminLayoutProps {}

const AdminLayout: FC<AdminLayoutProps> = ({}) => {
  return (
    <>
      <Box sx={{ height: 68, backgroundColor: 'primary.main' }}></Box>
      <Outlet />
    </>
  )
}

export default AdminLayout
