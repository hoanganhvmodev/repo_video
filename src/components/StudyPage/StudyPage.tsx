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
  FormControl,
  DialogContentText,
  DialogProps,
  Collapse
} from '@mui/material'
import Header from '../Header/HeaderDetail'
import styles from './StudyPage.module.css'
import DoneIcon from '@mui/icons-material/Done'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

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
      {!videoUrl ? ( // If videoUrl is null, display "Hãy chọn video"
        <Box
          sx={{
            px: 12,
            backgroundSize: 'cover',
            boxSizing: 'inherit',
            backgroundPosition: 'center center',
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <p>Hãy chọn video</p>
        </Box>
      ) : (
        // If videoUrl is not null, display the video
        <Box
          sx={{
            px: 12,
            backgroundSize: 'cover',
            boxSizing: 'inherit',
            backgroundPosition: 'center center',
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <video src={videoUrl} controls width='100%' height='auto' />
        </Box>
      )}
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
  const fakeComments = [
    {
      id: 1,
      author: 'Tô Tiến Toàn',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMRRJ4zInHZfaINaSUaBgvCnuitVykCZYkCEwLseRtcelA=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:38',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      author: 'Hoàng Anh',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMRcL6FJ_2SNH-IQkgO_73gcRGvz4BuEaADEQ3K8T5DGXw=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 3,
      author: 'Tuấn Đá',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMQbjXSTFPX46zEaVJKukH1cgy_D_qsfF4c3xRxXGznzAQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 4,
      author: 'Lê Minh Hải',
      avatar:
        'https://lh3.googleusercontent.com/a/AAcHTtd1ItEZFMOvH4QspPkMUiSBkoJeVvgLz35U7HB7YGBn=s272-p-k-rw-no-mo',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 5,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 6,
      author: 'Sáng DT',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMS1xcRmH_AtVBeOur_SChs9reNCvJQrSOQpoihi5WE0kg=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 7,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 8,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 9,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }
    // Add more fake comments as needed
  ]

  const [open, setOpen] = React.useState(false)
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper')
  const [comments, setComments] = React.useState(fakeComments)
  const [commentText, setCommentText] = React.useState('')
  const [showAllComments, setShowAllComments] = React.useState(false)

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value)
  }

  const handleCommentSubmit = () => {
    const newComment = {
      id: comments.length + 1,
      author: 'New User',
      avatar: 'https://example.com/avatar3.png', // Placeholder for new comment's avatar
      timestamp: new Date().toLocaleString(),
      content: commentText
    }

    setComments([...comments, newComment])
    setCommentText('')
  }

  const handleShowAllComments = () => {
    setShowAllComments(true)
  }

  const descriptionElementRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

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
            onClick={handleClickOpen('paper')}
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
          <Dialog
            open={open}
            className={styles['scrollBar']}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby='scroll-dialog-title'
            aria-describedby='scroll-dialog-description'
            maxWidth='lg'
            PaperProps={{
              style: {
                width: '43%',
                minWidth: '300px',
                height: '100vh',
                maxHeight: '100vh',
                position: 'absolute',
                top: -32,
                right: -30
              }
            }}
          >
            <DialogTitle id='scroll-dialog-title'>Comments</DialogTitle>
            <DialogContent dividers sx={{ paddingRight: 0 }}>
              <DialogContentText
                id='scroll-dialog-description'
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Box
                  className={styles['scrollBar']}
                  sx={{
                    width: '100%',
                    minWidth: '300px',
                    overflowY: 'auto',
                    height: 'calc(90vh)',
                    paddingRight: 2
                  }}
                >
                  <TextField
                    label='Bạn có thắc mắc gì trong bài học này?'
                    variant='standard'
                    margin='normal'
                    fullWidth
                    value={commentText}
                    onChange={handleCommentChange}
                  />
                  <Button onClick={handleClose}>Hủy</Button>
                  <Button onClick={handleCommentSubmit}>Gửi</Button>
                  <Box>
                    {comments
                      .slice(0, showAllComments ? comments.length : 5)
                      .map((comment) => (
                        <Box
                          key={comment.id}
                          display='flex'
                          alignItems='center'
                          mt={5}
                        >
                          <img
                            src={comment.avatar}
                            alt='Avatar'
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%'
                            }}
                          />
                          <Box
                            ml={3}
                            sx={{
                              backgroundColor: '#E9ECEE',
                              borderRadius: 3,
                              p: 2
                            }}
                          >
                            <Typography variant='body1'>
                              {comment.content}
                            </Typography>
                            <Typography variant='caption' color='textSecondary'>
                              {comment.timestamp}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    {comments.length > 5 && !showAllComments && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 4
                        }}
                      >
                        <Button onClick={handleShowAllComments}>
                          <KeyboardArrowUpIcon
                            sx={{ transform: 'rotate(180deg)' }}
                          ></KeyboardArrowUpIcon>
                          Xem thêm
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>
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
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)

  // Lưu trạng thái hiện/ẩn của từng khóa học
  const [collapseStates, setCollapseStates] = useState<{
    [key: number]: boolean
  }>({})

  const handleSelectCourse = (courseIndex: number) => {
    setSelectedCourse((prevCourseIndex) =>
      prevCourseIndex === courseIndex ? null : courseIndex
    )

    // Nếu khóa học đã được mở thì đóng lại, ngược lại mở khóa học
    setCollapseStates((prevCollapseStates) => ({
      ...prevCollapseStates,
      [courseIndex]: !prevCollapseStates[courseIndex]
    }))

    setSelectedChapter(null) // Reset the selected chapter when a new course is selected
  }

  const handleSelectChapter = (chapterIndex: number) => {
    setSelectedChapter(chapterIndex)
  }

  const getTotalChapterCount = () => {
    let totalCount = 0
    for (const course of courses) {
      totalCount += course.chapters.length
    }
    return totalCount
  }

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
                <React.Fragment key={index}>
                  <ListItemButton onClick={() => handleSelectCourse(index)}>
                    <ListItemText primary={`${index + 1}: ${course.name}`} />
                  </ListItemButton>
                  <Collapse in={collapseStates[index]} unmountOnExit>
                    <List>
                      {course.chapters.map((chapter, chapterIndex) => (
                        <ListItemButton
                          key={chapterIndex}
                          onClick={() => handleSelectChapter(chapterIndex)}
                          selected={selectedChapter === chapterIndex}
                        >
                          <ListItemText
                            primary={`${chapterIndex + 1}: ${chapter}`}
                          />
                          <DoneIcon color='success' />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
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
