import { Box, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface CFormProps {
  title: string
  sxCustom?: object
  styleCustom?: object
  sxCustomTitle?: object
  inputArea?: ReactNode
  actionPosition?: 'start' | 'center' | 'end'
  actionArea?: ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const CForm: FC<CFormProps> = ({
  sxCustom,
  styleCustom,
  title,
  sxCustomTitle,
  inputArea,
  actionPosition = 'end',
  actionArea,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          minWidth: '600px',
          minHeight: '200px',
          p: 4,
          ...sxCustom
        }}
        style={styleCustom}
      >
        <Typography
          variant='h3'
          sx={{ fontWeight: 600, fontSize: '28px', mb: 3, ...sxCustomTitle }}
        >
          {title}
        </Typography>
        {inputArea}
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: actionPosition, gap: 2 }}>
            {actionArea}
          </Box>
        </Box>
      </Box>
    </form>
  )
}

export default CForm
