import Box from '@mui/material/Box'
import { FC, useState } from 'react'

import TableVideo from '@common/TableVideo/TableVideo'
import FormCourse from '@components/FormCourse/FormCourse'
import { Button } from '@mui/material'

// interface CourseMngProps {
//   CourseName: string
//   Speaker: string
//   level: string
//   viewOrder: boolean
//   numberLessons: string
//   description: string
// }

const data = [
  {
    id: 1,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 2,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 3,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 4,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 5,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 6,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 7,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 8,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 9,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  },
  {
    id: 10,
    courseName: 'HTML',
    videoGroupName: 'Chuonwg 1',
    videoName: 'Learning react',
    speaker: 'anhnh',
    description:
      'Các chuỗi là các giá trị nguyên thủy và việc kiểm tra chúng thực sự đơn giản',
    view: 999,
    comment: 2
  }
]

const header = [
  'STT',
  'courseName',
  'videoGroupName',
  'videoName',
  'speaker',
  'description',
  'view',
  'comment'
]

const CourseManagement: FC<{}> = () => {
  const [openForm, setOpenForm] = useState<boolean>(false)

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
            {'HTML for PRO'}
          </Box>
          <Button variant='contained' onClick={() => setOpenForm(true)}>
            Thêm khóa học
          </Button>
        </Box>
        <Box>
          <TableVideo
            headerTitle={header}
            dataTable={data}
            path='/admin/course/detail'
          />
        </Box>
      </Box>
      <FormCourse open={openForm} handleSetOpen={setOpenForm} />
    </>
  )
}

export default CourseManagement
