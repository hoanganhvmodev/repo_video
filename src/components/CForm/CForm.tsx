import { Box, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface CFormProps {
  title: string
  sxCustom?: object
  styleCustom?: object
  sxCustomTitle?: object
  inputArea?: ReactNode
  actionArea?: ReactNode
}

const CForm: FC<CFormProps> = ({
  sxCustom,
  styleCustom,
  title,
  sxCustomTitle,
  inputArea,
  actionArea
}) => {
  return (
    <>
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
        <Box>{actionArea}</Box>
      </Box>
    </>
  )
}

export default CForm
