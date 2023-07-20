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
import { useNavigate } from 'react-router-dom'

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
  path?: string
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

const TableVideo: React.FC<Props> = ({ dataTable, headerTitle, path }) => {
  const [rowTable, setRowTable] = useState(dataTable)
  const navigate = useNavigate()

  const handleRedirectRouter = () => {
    navigate(path)
  }

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
    return Math.ceil(dataTable.length / 6)
  }, [dataTable.length])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 640,
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
          }
        }}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='simple table'>
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
          <TableBody onClick={() => handleRedirectRouter()}>
            {rowTable.map((value: any, index) => (
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
                {Object.keys(value).map((key: any) => {
                  return <TableCell align='left'>{value[key]}</TableCell>
                })}
                <TableCell align='left'>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton
                      sx={{ mr: '8px' }}
                      onClick={(e) => {
                        e.stopPropagation(), handleEditRowTable(index, value)
                      }}
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
    </Paper>
  )
}

export default TableVideo
