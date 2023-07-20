import { FC } from 'react'
import { ReactNode, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TableDetail from '@common/TableDetail/TableDetail'
import VideoList from '@components/VideoList/VideoList'
import FormChapter from '@components/FormChapter/FormChapter'

interface CourseDetail {
  CourseName: string
  Speaker: string
  level: string
  viewOrder: boolean
  numberLessons: string
  description: string
}

interface TabPanelProps {
  children?: ReactNode
  index?: number
  value?: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: 'auto', height: '80vh' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const CourseDetail: FC<TabPanelProps> = () => {
  const [value, setValue] = useState(0)
  const [openForm, setOpenForm] = useState<boolean>(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleShowFormChapter = () => {
    setOpenForm(true)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            '& button:hover': {
              backgroundColor: '#CCCCCC'
            },
            '& button:active': {
              backgroundColor: '#FFC000',
              color: 'white'
            },
            '& button.Mui-selected': {
              backgroundColor: '#FFC000',
              color: 'white'
            }
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Danh sách nhóm video' {...a11yProps(0)} />
            <Tab label='Chi tiết khóa học' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <VideoList handleShowFormChapter={handleShowFormChapter} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableDetail />
        </CustomTabPanel>
      </Box>
      <FormChapter open={openForm} handleSetOpen={setOpenForm} />
    </>
  )
}

export default CourseDetail
