import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FC, ReactNode } from 'react'

interface CPopupProps {
  open: boolean
  title?: string
  description?: string
  titleCustom?: ReactNode
  descriptionCustom?: ReactNode
  actionCustom?: ReactNode
}

const CPopup: FC<CPopupProps> = ({
  open,
  title,
  description,
  titleCustom,
  descriptionCustom,
  actionCustom
}) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle sx={{pt: 4, px: 3}}>{titleCustom ? titleCustom : title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {descriptionCustom ? descriptionCustom : description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{pb: 3, px: 3}}>{actionCustom}</DialogActions>
      </Dialog>
    </div>
  )
}

export default CPopup
