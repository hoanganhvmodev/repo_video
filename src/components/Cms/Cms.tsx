import { FC } from 'react'
import { ReactNode, useState, SyntheticEvent } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import MovieIcon from '@mui/icons-material/Movie'
import CourseDetail from '@components/CourseDetail/CourseDetail'
import CourseManagement from '@components/CourseManagement/CourseManagement'

interface CmsProps {
  children?: ReactNode
  index?: number
  value?: number
  childrenComponent?: ReactNode
}

const TabPanel = (props: CmsProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 4,
            backgroundColor: '#E9ECEE',
            width: 'calc(100vw - 345px)',
            height: '100vh'
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const styleTab = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  height: '40px'
}

const styleIcon = {
  ml: '60px',
  mr: '24px'
}

const Cms: FC<CmsProps> = ({ childrenComponent }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 224
        }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            width: '345px',
            height: '100vh',
            '& button:hover': {
              backgroundColor: '#E9ECEE'
            },
            '& button:active': {
              backgroundColor: '#FF9F1C',
              color: 'white'
            },
            '& button.Mui-selected': {
              backgroundColor: '#FF9F1C',
              color: 'white'
            }
          }}
        >
          <Tab
            label='Quản lý khóa học'
            {...a11yProps(0)}
            icon={<FolderCopyIcon sx={styleIcon} />}
            sx={styleTab}
          />
          <Tab
            label='Quản lý video'
            {...a11yProps(1)}
            icon={<SmartDisplayIcon sx={styleIcon} />}
            sx={styleTab}
          />
          <Tab
            label='Quản lý ...'
            {...a11yProps(2)}
            icon={<MovieIcon sx={styleIcon} />}
            sx={styleTab}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {childrenComponent}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* import children component */}
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* import children component */}
          Item Three
        </TabPanel>
      </Box>
    </>
  )
}

export default Cms
