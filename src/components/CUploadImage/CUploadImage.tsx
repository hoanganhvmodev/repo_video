import CloseIcon from '@mui/icons-material/Close'
import ImageIcon from '@mui/icons-material/Image'
import { Box, Button, InputLabel } from '@mui/material'
import { ChangeEvent, FC, useRef } from 'react'
interface CUploadImageProps {
  label: string
  error: any
  sxContainer?: object
  attachment: any
  handleSelectFile?: (e: ChangeEvent<HTMLInputElement>) => any
  handleCloseSelectFile?: () => any
}

const CUploadImage: FC<CUploadImageProps> = ({
  label,
  error,
  sxContainer,
  attachment,
  handleSelectFile,
  handleCloseSelectFile
}) => {
  const ref = useRef<HTMLInputElement>(null)

  return !(attachment && attachment?.url) ? (
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
          onChange={handleSelectFile}
        />
      </Button>
    </Box>
  ) : (
    <Box
      position='relative'
      sx={{
        ...sxContainer,
        background: '#F5F5F5',
        borderRadius: '12px'
      }}
    >
      <img
        src={attachment?.url}
        alt='thumbnail'
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <Button
        sx={{
          position: 'absolute',
          top: 1,
          right: 1,
          width: '32px',
          height: '32px',
          minWidth: '32px',
          padding: 0,
          borderRadius: '9999px'
        }}
        onClick={() => {
          if (handleCloseSelectFile) {
            handleCloseSelectFile()
          }
        }}
      >
        <CloseIcon sx={{ color: 'white' }} />
      </Button>
    </Box>
  )
}

export default CUploadImage
