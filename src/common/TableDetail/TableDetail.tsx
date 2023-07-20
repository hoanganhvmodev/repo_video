import { FC } from 'react'
import Box from '@mui/material/Box'
import { AddBox } from '@mui/icons-material'

// interface CourseDetail {
//     CourseName?: string
//     Speaker?: string
//     level?: string
//     viewOrder?: boolean,
//     numberLessons?: string
//     description?: string
// }

// interface Props {
//   dataTable: CourseDetail[]
//   headerTitle: string[]
// }

// use example
{
  /*
  <TableDetail
    headerTitle={headerTitle}
    dataTable={dataTable} 
  /> 
*/
}

const headerTitle = [
  'Tên khóa học',
  'speaker',
  'Độ khó',
  'Yêu cầu xem theo thứ tự',
  'Số lượt học',
  'Mô tả'
]

const dataTable = [
  {
    CourseName: 'HTML cơ bản',
    Speaker: 'Nguyễn Hoàng Anh',
    level: 'Hard',
    viewOrder: true,
    numberLessons: '999',
    description:
      'Bài giảng của bạn quá hay Bài giảng của bạn quá hay Bài giảng của bạn quá hay Bài giảng của bạn quá hay Bài giảng của bạn quá hay Bài giảng của bạn quá hay'
  }
]

const TableDetail: React.FC<{}> = () => {
  return (
    <>
      <Box
        sx={{
          minWidth: 650,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          boxShadow: 3
        }}
        aria-label='simple table'
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', p: 3, mr: '80px' }}
        >
          {headerTitle.map((title, index) => (
            <Box sx={{ fontWeight: 'bold', p: 2 }} key={index}>
              {title}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
          {dataTable.map((value: any, index) => (
            <Box key={index}>
              {Object.keys(value).map((key: any) => {
                if (typeof value[key] === 'boolean') {
                  return <Box sx={{ p: 2 }}>{value[key] ? 'Có' : 'Không'}</Box>
                } else {
                  return <Box sx={{ p: 2 }}>{value[key]}</Box>
                }
              })}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default TableDetail
