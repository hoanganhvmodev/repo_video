/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material'
import Header from '../Header/HeaderDetail'
import styles from './StudyPage.module.css'
import DoneIcon from '@mui/icons-material/Done'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import AddIcon from '@mui/icons-material/Add'
interface Course {
  name: string
  chapters: string[]
}

interface VideoPlayerProps {
  videoUrl: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          px: 12,
          backgroundSize: 'cover',
          boxSizing: 'inherit',
          backgroundPosition: 'center center',
          display: 'flex',
          cursor: 'poiteer',
          alignItem: 'center',
          justifyContent: 'center'
        }}
      >
        <video src={videoUrl} controls width='100%' height='auto' />
      </Box>
    </Box>
  )
}

interface VideoContentPros {
  videoName: string
}
const VideoContent: React.FC<VideoContentPros> = ({ videoName }) => {
  const [showNoteDialog, setShowNoteDialog] = useState(false)
  const [note, setNote] = useState('')

  const handleOpenNoteDialog = () => {
    setShowNoteDialog(true)
  }

  const handleCloseNoteDialog = () => {
    setShowNoteDialog(false)
  }

  const handleSaveNote = () => {
    // Perform save note logic here
    console.log('Note:', note)
    handleCloseNoteDialog()
  }

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Box sx={{ py: 4, fontSize: 14, ml: 13 }} width={125}>
            <FormControl
              fullWidth
              size='small'
              variant='standard'
              sx={{ fontSize: 18 }}
            >
              <InputLabel size='small' sx={{ fontSize: 18 }}>
                Server
              </InputLabel>
              <Select label='Level' size='small' sx={{ fontSize: 18 }}>
                <MenuItem
                  value={'server1'}
                  sx={{ fontSize: 18, fontWeight: 100 }}
                >
                  Server 1
                </MenuItem>
                <MenuItem value={'server2'} sx={{ fontSize: 18 }}>
                  Server 2
                </MenuItem>
                <MenuItem value={'server3'} sx={{ fontSize: 18 }}>
                  Server 3
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{ mt: 4, mr: 10, backgroundColor: '#EBEBEB' }}
            variant='contained'
            onClick={handleOpenNoteDialog}
          >
            <AddIcon></AddIcon>
            Thêm ghi chú tại : 3:25
          </Button>
        </Box>
      </Box>
      <Box sx={{ px: 13 }}>
        <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>
          {videoName}
        </Typography>
        <Box sx={{ pt: 3 }}>Cập nhật tháng 11 năm 2022</Box>
        <Box sx={{ pt: 5 }}>
          Lorem ipsum dolor sit amet consectetur. Sit at nibh vulputate neque
          risus tellus tortor aliquam. Vitae vel urna curabitur sit id
          consequat. Lorem varius lectus mauris egestas gravida. Faucibus eu dui
          ac purus massa id ultrices turpis.Lorem ipsum dolor sit amet
          consectetur. Sit at nibh vulputate neque risus tellus tortor aliquam.
          Vitae vel urna curabitur sit id consequat. Lorem varius lectus mauris
          egestas gravida. Faucibus eu dui ac purus massa id ultrices
          turpis.Lorem ipsum dolor sit amet consectetur. Sit at nibh vulputate
          neque risus tellus tortor aliquam. Vitae vel urna curabitur sit id
          consequat. Lorem varius lectus mauris egestas gravida. Faucibus eu dui
          ac purus massa id ultrices turpis.Lorem ipsum dolor sit amet
          consectetur. Sit at nibh vulputate neque risus tellus tortor aliquam.
          Vitae vel urna curabitur sit id consequat. Lorem varius lectus mauris
          egestas gravida. Faucibus eu dui ac purus massa id ultrices turpis.
          Lorem ipsum dolor sit amet consectetur. Sit at nibh vulputate neque
          risus tellus tortor aliquam. Vitae vel urna curabitur sit id
          consequat. Lorem varius lectus mauris egestas gravida. Faucibus eu dui
          ac purus massa id ultrices turpis.Lorem ipsum dolor sit amet
          consectetur. Sit at nibh vulputate neque risus tellus tortor
          aliquam.Lorem ipsum dolor sit amet consectetur. Sit at nibh vulputate
          neque risus tellus tortor aliquam. Vitae vel urna curabitur sit id
          consequat. Lorem varius lectus mauris egestas gravida. Faucibus eu dui
          ac purus massa id ultrices turpis.Lorem ipsum dolor sit amet
          consectetur. Sit at nibh vulputate neque risus tellus tortor aliquam.
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button
            size='large'
            variant='outlined'
            sx={{
              position: 'fixed',
              bottom: '66px',
              right: '500px',
              zIndex: 2,
              backgroundColor: 'white'
            }}
          >
            <ChatOutlinedIcon color='primary' sx={{ mr: 1 }}></ChatOutlinedIcon>
            Hỏi đáp
          </Button>
        </Box>
      </Box>

      <Dialog open={showNoteDialog} onClose={handleCloseNoteDialog}>
        <DialogTitle display={'flex'}>
          Thêm ghi chú tại
          <Box
            sx={{
              display: 'flex',
              width: 60,
              borderRadius: 3,
              backgroundColor: 'orange',
              color: '#fff',
              justifyContent: 'center',
              ml: '10px'
            }}
          >
            3:25
          </Box>
        </DialogTitle>
        <DialogContent
          className={styles['scrollBar']}
          sx={{ width: 600, height: 200 }}
          dividers
        >
          <TextField
            label='Ghi chú'
            multiline
            value={note}
            onChange={handleNoteChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNoteDialog}>Hủy</Button>
          <Button onClick={handleSaveNote} variant='contained' color='primary'>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(0)
  const [selectedChapter, setSelectedChapter] = useState<number | null>(0)

  const handleSelectCourse = (courseIndex: number) => {
    setSelectedCourse(courseIndex)
    setSelectedChapter(0)
  }

  const handleSelectChapter = (chapterIndex: number) => {
    setSelectedChapter(chapterIndex)
  }

  const courses: Course[] = [
    {
      name: 'Course 1',
      chapters: [
        'Chapter 1-1',
        'Chapter 1-2',
        'Chapter 1-3',
        'Chapter 1-4',
        'Chapter 1-5',
        'Chapter 1-6',
        'Chapter 1-7',
        'Chapter 1-8',
        'Chapter 1-9',
        'Chapter 1-10',
        'Chapter 1-11',
        'Chapter 1-12'
      ]
    },
    {
      name: 'Course 2',
      chapters: ['Chapter 2-1', 'Chapter 2-2', 'Chapter 2-3']
    },
    {
      name: 'Course 3',
      chapters: ['Chapter 3-1', 'Chapter 2-2', 'Chapter 2-3']
    },
    {
      name: 'Course 4',
      chapters: ['Chapter 4-1', 'Chapter 4-2', 'Chapter 4-3']
    },
    {
      name: 'Course 5',
      chapters: ['Chapter 5-1', 'Chapter 5-2', 'Chapter 5-3']
    }
  ]

  const selectedCourseData =
    selectedCourse !== null ? courses[selectedCourse] : null
  const selectedChapterData =
    selectedCourseData && selectedChapter !== null
      ? selectedCourseData.chapters[selectedChapter]
      : null
  const selectedChapterName = selectedChapterData ? selectedChapterData : ''
  const selectedChapterIndex = selectedChapter !== null ? selectedChapter : 0

  return (
    <Box>
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
      <Box>
        <Grid container spacing={1}>
          <Grid
            className={styles['scrollBar']}
            item
            xs={9}
            sx={{
              marginBottom: '60px',
              marginTop: '64px',
              overflowY: 'auto',
              height: 'calc(100vh - 124px)'
            }}
          >
            <Box
              sx={{
                backgroundColor: 'black',
                padding: '0 1%',
                width: '100%',
                display: 'block'
              }}
            >
              {selectedChapterData && (
                <VideoPlayer
                  videoUrl={`http://www.w3schools.com/html/mov_bbb.mp4`}
                />
              )}
            </Box>
            <Box>
              <Box>
                <VideoContent
                  videoName={`Chapter ${
                    selectedChapter + 1
                  }: ${selectedChapterData}`}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            className={styles['scrollBar']}
            item
            xs={3}
            sx={{
              position: 'fixed',
              top: '64px',
              right: '0px',
              width: '30vw',
              height: 'calc(100vh - 124px)',
              overflowY: 'auto',
              fontSize: 18,
              fontWeight: 600
            }}
          >
            <Box>Nội dung khóa học</Box>
            <List>
              {courses.map((course, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => handleSelectCourse(index)}
                  selected={selectedCourse === index}
                >
                  <ListItemText primary={`${index + 1}: ${course.name}`} />
                </ListItemButton>
              ))}
            </List>
            {selectedCourseData && selectedCourse !== null && (
              <List>
                {selectedCourseData.chapters.map((chapter, index) => (
                  <ListItemButton
                    key={index}
                    onClick={() => handleSelectChapter(index)}
                    selected={selectedChapter === index}
                  >
                    <ListItemText
                      primary={`Chapter ${index + 1}`}
                      secondary={`${index + 1}: ${chapter}`}
                    />
                    <DoneIcon color='success' />
                  </ListItemButton>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        bgcolor='#f5f5f5'
        height={60}
        position='fixed'
        bottom={0}
        left={0}
        right={0}
      >
        <Button
          variant='outlined'
          disabled={selectedChapterIndex === 0}
          onClick={() => handleSelectChapter(selectedChapterIndex - 1)}
          sx={{ px: 4, ml: 4 }}
        >
          Back
        </Button>
        <Typography variant='h6' align='right' flexGrow={1} paddingRight={16}>
          {selectedChapterName}
        </Typography>
        <Button
          variant='outlined'
          disabled={
            selectedChapterIndex === selectedCourseData?.chapters.length - 1
          }
          sx={{ px: 4, mr: 4 }}
          onClick={() => handleSelectChapter(selectedChapterIndex + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default App
