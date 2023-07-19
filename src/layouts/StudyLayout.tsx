import Header from '@components/Header/HeaderDetail'
import { Box } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface StudyLayoutProps {}

const StudyLayout: FC<StudyLayoutProps> = ({}) => {
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
    </div>
  )
}

export default StudyLayout
