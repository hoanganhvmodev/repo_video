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
  Typography
} from '@mui/material'
import Header from '../Header/HeaderDetail'

interface Course {
  name: string
  chapters: string[]
}

interface VideoPlayerProps {
  videoUrl: string
  videoName: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, videoName }) => {
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
      <video src={videoUrl} controls width='100%' height='auto' />
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ fontSize: 26, p: 2 }}>{videoName}</Typography>
        <Button
          sx={{ justifyContent: 'right' }}
          variant='contained'
          onClick={handleOpenNoteDialog}
        >
          Thêm ghi chú
        </Button>
      </Box>
      <Dialog open={showNoteDialog} onClose={handleCloseNoteDialog}>
        <DialogTitle>Thêm ghi chú</DialogTitle>
        <DialogContent>
          <TextField
            label='Ghi chú'
            multiline
            rows={5}
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
      chapters: ['Chapter 1-1', 'Chapter 1-2', 'Chapter 1-3']
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
      name: 'Course 1',
      chapters: ['Chapter 1-1', 'Chapter 1-2', 'Chapter 1-3']
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
      name: 'Course 1',
      chapters: ['Chapter 1-1', 'Chapter 1-2', 'Chapter 1-3']
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
      <Box>
        <Header />
      </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={9} >
            {selectedChapterData && (
              <VideoPlayer
                videoUrl={`https://example.com/videos/${selectedChapterData}.mp4`}
                videoName={`Chapter ${
                  selectedChapter + 1
                }: ${selectedChapterData}`}
              />
            )}
          </Grid>
          <Grid item xs={3}>
            <List>
              {courses.map((course, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => handleSelectCourse(index)}
                  selected={selectedCourse === index}
                >
                  <ListItemText primary={course.name} />
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
                      secondary={chapter}
                    />
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
          onClick={() => handleSelectChapter(selectedChapterIndex + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default App
