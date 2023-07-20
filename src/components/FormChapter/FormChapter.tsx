import { Box, Button, Dialog, TextField } from '@mui/material'
import { FC, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import CForm from '@components/CForm/CForm'
import { ActionForm } from '@type/CommonForm'
import { ACTION_FORM } from '@constants/common-form'
import { Chapter } from '@type/Chapter'
import CPopup from '@components/CPopup/CPopup'

interface FormChapterProps {
  open: boolean
  handleSetOpen: any
  dataFormEdit?: Chapter
  action?: ActionForm
}

const initDataForm = {
  id: null,
  name: '',
  description: '',
  id_course: null
}

const FormChapter: FC<FormChapterProps> = ({
  open,
  handleSetOpen,
  action = ACTION_FORM.CREATE,
  dataFormEdit
}) => {
  // *********** State ******************
  const initDataFormState = dataFormEdit ? dataFormEdit : initDataForm
  const { t } = useTranslation()
  const [openWarningClose, setOpenWarningClose] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initDataFormState
  })

  // *********** Computed ******************
  const getTitle = useMemo(() => {
    if (action === ACTION_FORM.CREATE) return t('formChapter.titleCreate')
    if (action === ACTION_FORM.EDIT) return t('formChapter.titleEdit')
  }, [action])

  const getLabelBtnSubmit = useMemo(() => {
    if (action === ACTION_FORM.CREATE) return t('commonForm.create')
    if (action === ACTION_FORM.EDIT) return t('commonForm.edit')
  }, [action])

  // *********** Methods ******************

  const handleCloseDialog = (event: object, reason: string) => {
    if (reason && reason == 'backdropClick') return
    setOpenWarningClose(true)
  }

  const handleCloseWarningClose = () => {
    setOpenWarningClose(false)
  }

  const handleCloseFormCreate = () => {
    handleSetOpen(false)
    setOpenWarningClose(false)
  }

  const handleSubmitForm = (data: Chapter) => {
    console.log(data)
  }

  return (
    <>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            minWidth: '700px'
          }
        }}
      >
        <CForm
          onSubmit={handleSubmit(handleSubmitForm)}
          title={getTitle || ''}
          sxCustom={{
            width: '700px'
          }}
          // ============= Body Form ================
          inputArea={
            <Box sx={{ px: 1 }}>
              <TextField
                label={t('createCourse.nameLabel')}
                variant='standard'
                fullWidth
                {...register('name', {
                  required: t('validatedMessage.notEmpty')
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                variant='standard'
                label={t('createCourse.descLabel')}
                multiline
                rows={6}
                sx={{ mt: 4, width: '100%' }}
                {...register('description', {
                  required: t('validatedMessage.notEmpty')
                })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Box>
          }
          // ============= Action Form ==============
          actionArea={
            <>
              <Button
                variant='outlined'
                sx={{ minWidth: '120px' }}
                onClick={() => {
                  handleCloseDialog({}, 'button-close')
                }}
              >
                {t('commonForm.close')}
              </Button>
              <Button
                type='submit'
                variant='contained'
                sx={{ minWidth: '120px' }}
              >
                {getLabelBtnSubmit || ''}
              </Button>
            </>
          }
        />
      </Dialog>
      <CPopup
        open={openWarningClose}
        title={t('formChapter.warningCloseTitle')}
        description={t('formChapter.warningCloseDesc')}
        actionCustom={
          <Box>
            <Button
              variant='outlined'
              onClick={handleCloseWarningClose}
              sx={{ width: '100px' }}
            >
              {t('commonForm.no')}
            </Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ color: '#FFF', ml: 2, width: '100px' }}
              onClick={handleCloseFormCreate}
            >
              {t('commonForm.yes')}
            </Button>
          </Box>
        }
      />
    </>
  )
}

export default FormChapter
