import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useState, useMemo } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface DataTable {
  id: number
  courseName?: string
  videoGroupName?: string
  videoName?: string
  speaker?: string
  description?: string
  view?: number
  comment?: number
}

interface Props {
  dataTable: DataTable[]
  headerTitle: string[]
}

// use example
{
  /*
  <TableVideo 
    headerTitle={headerTitle}
    dataTable={dataTable} 
  /> 
*/
}

const TableVideo: React.FC<Props> = ({ dataTable, headerTitle }) => {
  const [rowTable, setRowTable] = useState(dataTable)

  const handleDeleteRowTable = (index: number) => {
    const rowsTable = [...rowTable]
    rowsTable.splice(index, 1)
    setRowTable(rowsTable)
  }

  const handleEditRowTable = (index: number, value: object) => {
    // logic edit table
    console.log(index, value)
  }

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    // console.log(event)
    console.log(page)
  }

  const countPage = useMemo(() => {
    return Math.ceil(dataTable.length / 10)
  }, [dataTable.length])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headerTitle.map((title, index) => (
              <TableCell sx={{ fontWeight: 'bold' }} key={index}>
                {title}
              </TableCell>
            ))}
            <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowTable.map((value, index) => (
            <TableRow
              key={index}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'whitesmoke'
                },
                cursor: 'pointer'
              }}
            >
              <TableCell component='th' scope='row'>
                {value.id}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.courseName ? '' : 'none' }}
              >
                {value?.courseName}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.videoGroupName ? '' : 'none' }}
              >
                {value?.videoGroupName}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.videoName ? '' : 'none' }}
              >
                {value?.videoName}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.speaker ? '' : 'none' }}
              >
                {value?.speaker}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.description ? '' : 'none' }}
              >
                {value?.description}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.view ? '' : 'none' }}
              >
                {value?.view}
              </TableCell>
              <TableCell
                align='left'
                sx={{ display: value?.comment ? '' : 'none' }}
              >
                {value?.comment}
              </TableCell>
              <TableCell align='left'>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <IconButton
                    sx={{ mr: '8px' }}
                    onClick={() => handleEditRowTable(index, value)}
                  >
                    <BorderColorRoundedIcon
                      sx={{ fontSize: '24px', color: '#67B1F5' }}
                    />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteRowTable(index)}>
                    <DeleteForeverRoundedIcon
                      sx={{ fontSize: '24px', color: '#FD7373' }}
                    />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'end', p: '12px' }}>
        <Stack spacing={2}>
          <Pagination
            count={countPage}
            shape='rounded'
            onChange={(e, page) => handleChangePage(e, page)}
          />
        </Stack>
      </Box>
    </TableContainer>
  )
}

export default TableVideo
