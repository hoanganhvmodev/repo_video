import CCheckbox from '@components/CCheckbox/CCheckbox'
import CForm from '@components/CForm/CForm'
import CInputTags from '@components/CInputTags/CInputTags'
import CPopup from '@components/CPopup/CPopup'
import CSelect from '@components/CSelect/CSelect'
import CUploadMedia from '@components/CUploadMedia/CUploadMedia'
import { ACTION_FORM } from '@constants/common-form'
import { LEVEL_COURSE } from '@constants/course'
import { useUploadMedia } from '@hooks/useUploadMedia'
import {
  Box,
  Button,
  Dialog,
  Grid,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import { ActionForm } from '@type/CommonForm'
import { DataFormCourse, ILevel, Level } from '@type/Course'
import { ChangeEvent, FC, useState, useMemo } from 'react'
import { useController, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormCourseProps {
  action?: ActionForm
  dataFormEdit?: DataFormCourse
}

const initDataForm = {
  id: null,
  name: '',
  thumbnail: '',
  level: Level.EASY,
  isSequence: false,
  tags: [],
  description: ''
}

const FormCourse: FC<FormCourseProps> = ({
  action = ACTION_FORM.CREATE,
  dataFormEdit
}) => {
  // *********** State ******************
  const initDataFormState = dataFormEdit ? dataFormEdit : initDataForm

  const { t } = useTranslation()
  const [openForm, setOpenForm] = useState<boolean>(true)
  const [openWarningClose, setOpenWarningClose] = useState<boolean>(false)
  const { attachment, handleSelectFile, handleCloseSelectFile } =
    useUploadMedia()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: initDataFormState
  })

  const { field: fieldLevel } = useController({ name: 'level', control })
  const { field: fieldIsSequence } = useController({
    name: 'isSequence',
    control
  })
  const { field: fieldTags } = useController({ name: 'tags', control })

  // *********** Computed ******************
  const getTitle = useMemo(() => {
    if (action === ACTION_FORM.CREATE) return t('createCourse.titleCreate')
    if (action === ACTION_FORM.EDIT) return t('createCourse.titleEdit')
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

  const handleChangeLevel = (event: SelectChangeEvent) => {
    fieldLevel.onChange(event.target.value)
  }

  const handleChangeSequence = (e: ChangeEvent<HTMLInputElement>) => {
    fieldIsSequence.onChange(e.target.checked)
  }

  const handleSelectedTags = (newTags: string[]) => {
    fieldTags.onChange(newTags)
  }

  const handleCloseWarningClose = () => {
    setOpenWarningClose(false)
  }

  const handleCloseFormCreate = () => {
    setOpenForm(false)
    setOpenWarningClose(false)
  }

  const handleUploadImage = async () => {
    // TODO : call API upload Image
    console.log(attachment)
    if (attachment) {
      const urlImage = 'localhost:8080/assets/abc.jpg' // result after call API upload  image
      return urlImage
    }
    // TODO : set error
    return null
  }

  const handleCreateCourse = async (dataForm: DataFormCourse) => {
    const urlImage = await handleUploadImage()

    const newCourse = {
      ...dataForm,
      thumbnail: urlImage
    }
    // TODO: call API create Course
    console.log(newCourse)
  }

  const handleEditCourse = async () => {}

  const handleSubmitForm = async (dataForm: DataFormCourse) => {
    if (action === ACTION_FORM.CREATE) {
      console.log(dataForm)

      await handleCreateCourse(dataForm)
    } else if (action === ACTION_FORM.EDIT) {
    }
  }

  return (
    <>
      <Dialog
        open={openForm}
        PaperProps={{
          sx: {
            minWidth: '900px'
          }
        }}
        onClose={handleCloseDialog}
      >
        <CForm
          onSubmit={handleSubmit(handleSubmitForm)}
          title={getTitle || ''}
          sxCustom={{
            width: '900px'
          }}
          // ============= Body Form ================
          inputArea={
            <Box sx={{ p: 1 }}>
              <Grid container spacing={2}>
                {/* ======= LEFT FORM ================= */}
                <Grid item xs={8}>
                  <Box>
                    {/* ================= INPUT NAME COURSE ================= */}
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
                  </Box>
                  <Grid
                    container
                    sx={{
                      mt: 4,
                      justifyContent: 'space-between',
                      alignItems: 'end'
                    }}
                  >
                    {/* ================= INPUT LEVEL ================= */}
                    <Grid item xs={5}>
                      <CSelect<ILevel>
                        value={fieldLevel.value}
                        label={t('createCourse.nameLabel')}
                        items={LEVEL_COURSE}
                        useI18n
                        onChange={handleChangeLevel}
                        registerHookForm={() => {
                          register('level')
                        }}
                      />
                    </Grid>
                    {/* ================= INPUT REQUIRE SEQUENCE ================= */}
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'end'
                        }}
                      >
                        <CCheckbox
                          value={fieldIsSequence.value}
                          label={t('createCourse.sequenceLabel')}
                          onChange={handleChangeSequence}
                          sxCheckBoxCustom={{
                            position: 'relative',
                            top: '8px'
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  {/* ================= INPUT TAGS ================= */}
                  <Box sx={{ mt: 4 }}>
                    <CInputTags
                      selectedTags={handleSelectedTags}
                      placeholder={t('createCourse.tagsLabel')}
                      hint={t('createCourse.hintTags')}
                      tags={fieldTags.value}
                    />
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <TextField
                      variant='standard'
                      label={t('createCourse.descLabel')}
                      multiline
                      rows={6}
                      sx={{ width: '100%' }}
                      {...register('description', {
                        required: t('validatedMessage.notEmpty')
                      })}
                      error={!!errors.description}
                      helperText={errors.description?.message}
                    />
                  </Box>
                </Grid>
                {/* ======= RIGHT FORM ================= */}
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    {/* ================= INPUT THUMBNAIL ================= */}
                    <CUploadMedia
                      attachment={attachment}
                      label={t('createCourse.thumbLabel')}
                      handleSelectFile={handleSelectFile}
                      handleCloseSelectFile={handleCloseSelectFile}
                      error={{}}
                      sxContainer={{
                        height: '120px',
                        width: '200px'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
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
        title={t('createCourse.warningCloseTitle')}
        description={t('createCourse.warningCloseDesc')}
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

export default FormCourse
