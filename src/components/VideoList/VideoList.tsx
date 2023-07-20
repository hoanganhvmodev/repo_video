import { FC } from 'react'
import { ReactNode, useState } from 'react'
import Box from '@mui/material/Box'

import TableVideo from '@common/TableVideo/TableVideo'
import { Button } from '@mui/material'

// interface videoListsProps {
//   id: string
//   videoName: string
// }

const data = [
  {
    id: 1,
    videoName: 'HTML'
  },
  {
    id: 2,
    videoName: 'HTML'
  },
  {
    id: 3,
    videoName: 'HTML'
  },
  {
    id: 4,
    videoName: 'HTML'
  },
  {
    id: 5,
    videoName: 'HTML'
  },
  {
    id: 6,
    videoName: 'HTML'
  },
  {
    id: 7,
    videoName: 'HTML'
  },
  {
    id: 8,
    videoName: 'HTML'
  },
  {
    id: 9,
    videoName: 'HTML'
  },
  {
    id: 10,
    videoName: 'HTML'
  }
]

const header = ['STT', 'Tên nhóm video']

interface VideoListProps {
  handleShowFormChapter: any
}
const VideoList: FC<VideoListProps> = ({ handleShowFormChapter }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mb: 2
          }}
        >
          <Box sx={{ fontWeight: 'bold', fontSize: '22px' }}>
            {'HTML cơ bản'}
          </Box>
          <Button
            variant='contained'
            onClick={() => {
              handleShowFormChapter()
            }}
          >
            Thêm chương
          </Button>
        </Box>
        <Box>
          <TableVideo
            headerTitle={header}
            dataTable={data}
            path='/admin/course/chapter'
          />
        </Box>
      </Box>
    </>
  )
}

export default VideoList
