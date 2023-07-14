import { FC, ChangeEvent, useRef, useState } from 'react'
import { Box, TextField, useTheme, Button, InputLabel } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
interface CUploadImageProps {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: any
  sxContainer?: object
}

const CUploadImage: FC<CUploadImageProps> = ({
  label,
  onChange,
  error,
  sxContainer
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const theme = useTheme()
  const [attachment, setAttachment] = useState<any>(null)

  return (
    <Box
      position='relative'
      sx={{
        ...sxContainer,
        background: '#F5F5F5',
        borderRadius: '12px'
      }}
    >
      <Box
        position='absolute'
        top={0}
        bottom={0}
        left={0}
        right={0}
        mx={2}
        sx={{
          with: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ImageIcon fontSize={'large'} sx={{ color: '#CCC' }} />
        <InputLabel>{label}</InputLabel>
      </Box>
      <Button
        component='label'
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '12px'
        }}
        onKeyDown={(e) => e.keyCode === 32 && ref.current?.click()}
      >
        <input
          ref={ref}
          type='file'
          accept='.png, .jpg, .jpeg'
          hidden
          onChange={onChange}
        />
      </Button>
    </Box>
  )
}

export default CUploadImage
