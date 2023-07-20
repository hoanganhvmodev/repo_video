/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react'
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide
} from '@mui/material'
import Header from '../Header/HeaderDetail'
import styles from './StudyPage.module.css'
import DoneIcon from '@mui/icons-material/Done'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import NoteRoundedIcon from '@mui/icons-material/NoteRounded'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { formatTimeVideo } from '@utils/formatTimeVideo'
import { TransitionProps } from '@mui/material/transitions'
import { useController, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface Course {
  name: string
  chapters: string[]
}

interface Note {
  time: number
  content: string
}

interface VideoContentPros {
  videoName: string
  videoUrl: string
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='left' ref={ref} {...props} />
})

const VideoContent: React.FC<VideoContentPros> = ({ videoName, videoUrl }) => {
  const { t } = useTranslation()
  const [showNoteDialog, setShowNoteDialog] = useState(false)

  const {
    register: registerNote,
    handleSubmit: handleSubmitNote,
    formState: formStateNote,
    control
  } = useForm({
    defaultValues: {
      note: ''
    }
  })

  const { field: fieldNote } = useController({ name: 'note', control })

  const handleOpenNoteDialog = () => {
    setShowNoteDialog(true)
  }

  const handleCloseNoteDialog = () => {
    setShowNoteDialog(false)
  }

  const handleSaveNote = (data: { note: string }) => {
    handleAddNote(data.note)
    handleCloseNoteDialog()
    fieldNote.onChange('')
  }
  const [currentTime, setCurrentTime] = useState(0)
  const [notesList, setNotesList] = useState<Note[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }
  const handleAddNote = (note: string) => {
    if (note.trim() !== '') {
      const newNote: Note = {
        time: currentTime,
        content: note
      }
      setNotesList([...notesList, newNote])
    }
  }
  const handleNoteClick = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp
      setCurrentTime(timestamp)
    }

    handleCloseNote()
  }

  const fakeComments = [
    {
      id: 1,
      author: 'Tô Tiến Toàn',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMRRJ4zInHZfaINaSUaBgvCnuitVykCZYkCEwLseRtcelA=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:38',
      content: 'Thả tim.'
    },
    {
      id: 2,
      author: 'Hoàng Anh',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMRcL6FJ_2SNH-IQkgO_73gcRGvz4BuEaADEQ3K8T5DGXw=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content: 'Hay quá.'
    },
    {
      id: 3,
      author: 'Tuấn Đá',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMQbjXSTFPX46zEaVJKukH1cgy_D_qsfF4c3xRxXGznzAQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content: 'Vip xì lip.'
    },
    {
      id: 4,
      author: 'Lê Minh Hải',
      avatar:
        'https://lh3.googleusercontent.com/a/AAcHTtd1ItEZFMOvH4QspPkMUiSBkoJeVvgLz35U7HB7YGBn=s272-p-k-rw-no-mo',
      timestamp: '2023-07-17 16:40',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestasPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
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
      content: 'Chị Linh spam.'
    },
    {
      id: 7,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content: 'Thầy giáo đẹp trai quá.'
    },
    {
      id: 8,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content: '<3 <3.'
    },
    {
      id: 9,
      author: 'Linh dm',
      avatar:
        'https://lh3.googleusercontent.com/a-/AD_cMMSqLU_kTPSHvhK2dq52T59laU_mGGiaDvgi0ltpdbwdMQ=s272-p-k-rw-no',
      timestamp: '2023-07-17 16:40',
      content: 'Yêu Toàn.'
    }
    // Add more fake comments as needed
  ]

  const [open, setOpen] = React.useState(false)
  const [openNote, setOpenNote] = React.useState(false)
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper')
  const [comments, setComments] = React.useState(fakeComments)
  const [commentText, setCommentText] = React.useState('')
  const [showAllComments, setShowAllComments] = React.useState(false)
  const [showAllNote, setShowAllNote] = React.useState(false)

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true)
    setScroll(scrollType)
  }
  const handleClickOpenNote = (scrollType: DialogProps['scroll']) => () => {
    setOpenNote(true)
    setScroll(scrollType)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleCloseNote = () => {
    setOpenNote(false)
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
  const handleShowLessComments = () => {
    setShowAllComments(false)
  }
  const handleShowAllNote = () => {
    setShowAllNote(true)
  }
  const handleShowLessNote = () => {
    setShowAllNote(false)
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
      <Box sx={{}}>
        <Box
          sx={{
            px: 14,
            backgroundSize: 'cover',
            boxSizing: 'inherit',
            backgroundPosition: 'center center',
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
          }}
        >
          <video
            src={videoUrl}
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            controls
            width='100%'
            height='auto'
          />
        </Box>
      </Box>
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
            sx={{ mt: 4, mr: 14, backgroundColor: 'primary' }}
            variant='contained'
            onClick={handleOpenNoteDialog}
          >
            <AddIcon></AddIcon>
            <Box>Thêm ghi chú tại</Box>
            <Box sx={{ ml: 0.5, fontSize: 15 }}>
              {formatTimeVideo(currentTime)}
            </Box>
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
          consequat.
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
              backgroundColor: 'primary'
            }}
          >
            <ChatOutlinedIcon color='inherit' sx={{ mr: 1 }}></ChatOutlinedIcon>
            Hỏi đáp
          </Button>
          <Dialog
            TransitionComponent={Transition}
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
                    {showAllComments && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 4
                        }}
                      >
                        <Button onClick={handleShowLessComments}>
                          <KeyboardArrowUpIcon
                            sx={{ transform: 'rotate(360deg)' }}
                          ></KeyboardArrowUpIcon>
                          Thu gọn
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <Button
            size='large'
            variant='outlined'
            onClick={handleClickOpenNote('paper')}
            sx={{
              position: 'fixed',
              bottom: '66px',
              right: '660px',
              zIndex: 2,
              backgroundColor: 'primary'
            }}
          >
            <NoteRoundedIcon color='inherit' sx={{ mr: 1 }}></NoteRoundedIcon>
            Ghi chú
          </Button>
          <Dialog
            TransitionComponent={Transition}
            open={openNote}
            className={styles['scrollBar']}
            onClose={handleCloseNote}
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
            <DialogTitle id='scroll-dialog-title'>Ghi chú của bạn</DialogTitle>
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
                  <Box>
                    {notesList
                      .slice(0, showAllNote ? notesList.length : 5)
                      .map((noteItem) => (
                        <Box key={noteItem.time} alignItems='center' mt={5}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}
                          >
                            <Box sx={{ display: 'flex' }}>
                              <Box
                                onClick={() => handleNoteClick(noteItem.time)}
                                sx={{
                                  display: 'flex',
                                  justifyItems: 'center',
                                  justifyContent: 'center',
                                  width: 60,
                                  borderRadius: 5,
                                  backgroundColor: 'orange',
                                  color: '#fff',
                                  mr: 2,
                                  fontSize: 18,
                                  height: 30,
                                  pt: 0.5,
                                  mb: 0.5,
                                  cursor: 'pointer'
                                }}
                              >
                                {formatTimeVideo(noteItem.time)}
                              </Box>
                              <Box
                                sx={{
                                  pt: 0.5,
                                  mb: 0.5,
                                  fontSize: 20,
                                  color: 'red'
                                }}
                              >
                                Tên bài học
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex'
                              }}
                            >
                              <EditIcon
                                sx={{ mr: 1, cursor: 'pointer' }}
                                className={styles['icon-note']}
                              />
                              <DeleteIcon
                                sx={{ cursor: 'pointer' }}
                                className={styles['icon-note']}
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: '#E9ECEE',
                              borderRadius: 4,
                              p: 2,
                              display: 'flex'
                            }}
                          >
                            <Box
                              sx={{
                                fontSize: 16,
                                p: 1
                              }}
                            >
                              {noteItem.content}
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    {notesList.length > 5 && !showAllNote && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 4
                        }}
                      >
                        <Button onClick={handleShowAllNote}>
                          <KeyboardArrowUpIcon
                            sx={{ transform: 'rotate(180deg)' }}
                          ></KeyboardArrowUpIcon>
                          Xem thêm
                        </Button>
                      </Box>
                    )}
                    {showAllNote && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 4
                        }}
                      >
                        <Button onClick={handleShowLessNote}>
                          <KeyboardArrowUpIcon
                            sx={{ transform: 'rotate(360deg)' }}
                          ></KeyboardArrowUpIcon>
                          Thu gọn
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
              width: 70,
              borderRadius: 3,
              backgroundColor: 'orange',
              color: '#fff',
              justifyContent: 'center',
              ml: '10px'
            }}
          >
            {formatTimeVideo(currentTime)}
          </Box>
        </DialogTitle>
        <form onSubmit={handleSubmitNote(handleSaveNote)}>
          <DialogContent
            className={styles['scrollBar']}
            sx={{ width: 600, height: 200 }}
            dividers
          >
            <TextField
              label='Ghi chú'
              multiline
              fullWidth
              {...registerNote('note', {
                required: t('validatedMessage.notEmpty')
              })}
              error={!!formStateNote.errors.note}
              helperText={formStateNote.errors.note?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNoteDialog}>Hủy</Button>
            <Button type='submit' variant='contained' color='primary'>
              Lưu
            </Button>
          </DialogActions>
        </form>
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

  const [isPageLoaded, setIsPageLoaded] = useState(false)
  useEffect(() => {
    // Xác định trang đã được load lại
    setIsPageLoaded(true)
  }, [])

  useEffect(() => {
    // Nếu trang đã load lại và chưa có khóa học hoặc chương học được chọn thì thiết lập giá trị mặc định
    if (isPageLoaded && (selectedCourse === null || selectedChapter === null)) {
      setSelectedCourse(0) // Giá trị mặc định: 0 (course đầu tiên)
      setSelectedChapter(0) // Giá trị mặc định: 0 (chapter đầu tiên của course đầu tiên)
    }
  }, [isPageLoaded, selectedCourse, selectedChapter])

  const handleSelectCourse = (courseIndex: number) => {
    setSelectedCourse((prevCourseIndex) =>
      prevCourseIndex === courseIndex ? null : courseIndex
    )
    setCollapseStates((prevCollapseStates) => ({
      ...prevCollapseStates,
      [courseIndex]: !prevCollapseStates[courseIndex]
    }))
    setSelectedChapter(0) // Reset the selected chapter when a new course is selected
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
                width: '100%',
                display: 'block'
              }}
            >
              {selectedChapterData && (
                <VideoContent
                  videoUrl={`http://www.w3schools.com/html/mov_bbb.mp4`}
                  videoName={`${selectedChapterData}`}
                />
              )}
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
              overflowY: 'auto'
            }}
          >
            <Box sx={{ fontSize: 18, fontWeight: 600, ml: 2, mt: 2, mb: 1 }}>
              Nội dung khóa học
            </Box>
            <List>
              {courses.map((course, index) => (
                <React.Fragment key={index}>
                  <Accordion
                    expanded={collapseStates[index] || false}
                    onChange={() => handleSelectCourse(index)}
                    elevation={0}
                    square
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`course-panel-${index}`}
                      id={`course-header-${index}`}
                      sx={{ backgroundColor: '#EDEFF1' }}
                    >
                      <Typography
                        variant='h6'
                        component='h4'
                        color={selectedCourse === index ? 'primary' : 'inherit'}
                      >
                        {`${index + 1}: ${course.name}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ mt: -0.5, mb: -3.5, py: 0 }}>
                      <List>
                        {course.chapters.map((chapter, chapterIndex) => (
                          <ListItemButton
                            key={chapterIndex}
                            onClick={() => handleSelectChapter(chapterIndex)}
                            selected={
                              selectedCourse === index &&
                              selectedChapter === chapterIndex
                            }
                          >
                            <ListItemText
                              primary={`${chapterIndex + 1}: ${chapter}`}
                              secondary={
                                <Box sx={{ display: 'flex' }}>
                                  <PlayCircleOutlineIcon
                                    fontSize='small'
                                    sx={{ mr: 1 }}
                                  />
                                  8:30
                                </Box>
                              }
                            />
                            <DoneIcon color='success' />
                          </ListItemButton>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
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
            selectedCourseData?.chapters &&
            selectedChapterIndex === selectedCourseData.chapters.length - 1
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
