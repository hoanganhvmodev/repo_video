import { FC } from 'react'
import { ReactNode, useState } from 'react'
import Box from '@mui/material/Box'

import TableVideo from '@common/TableVideo/TableVideo'
import FormVideo from '../FormVideo/FormVideo'
import { Button } from '@mui/material'

// interface videoListsProps {
//   id: string
//   videoName: string
// }

const data = [
  {
    id: 1,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 2,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 3,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 4,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 5,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 6,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 7,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 8,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 9,
    videoName: 'HTML',
    view: 999,
    comment: 99
  },
  {
    id: 10,
    videoName: 'HTML',
    view: 999,
    comment: 99
  }
]

const header = ['STT', 'Tên nhóm video', 'Số lượt xem', 'Số bình luận']

const ChapterVideo: FC<{}> = () => {
  const [openFormCreate, setOpenFormCreate] = useState<boolean>(false)

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
              setOpenFormCreate(true)
            }}
          >
            Thêm Video
          </Button>
        </Box>
        <Box>
          <TableVideo headerTitle={header} dataTable={data} />
        </Box>
      </Box>
      <FormVideo open={openFormCreate} handleShowForm={setOpenFormCreate} />
    </>
  )
}

export default ChapterVideo
