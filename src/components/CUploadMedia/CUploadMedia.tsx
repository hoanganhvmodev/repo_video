import CloseIcon from '@mui/icons-material/Close'
import ImageIcon from '@mui/icons-material/Image'
import { Box, Button, InputLabel } from '@mui/material'
import { ChangeEvent, FC, useRef } from 'react'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
interface CUploadMediaProps {
  label: string
  error: any
  sxContainer?: object
  attachment: any
  type?: 'image' | 'video'
  handleSelectFile?: (e: ChangeEvent<HTMLInputElement>) => any
  handleCloseSelectFile?: () => any
}

const CUploadMedia: FC<CUploadMediaProps> = ({
  label,
  error,
  sxContainer,
  attachment,
  type = 'image',
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
        {type === 'image' ? (
          <ImageIcon fontSize={'large'} sx={{ color: '#CCC' }} />
        ) : (
          <VideoLibraryIcon fontSize={'large'} sx={{ color: '#CCC' }} />
        )}

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
          accept={type === 'image' ? '.png, .jpg, .jpeg' : '.mp4, .mkv'}
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
      {type === 'image' ? (
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
      ) : (
        <video
          src={attachment?.url}
          controls
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      )}
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

export default CUploadMedia
