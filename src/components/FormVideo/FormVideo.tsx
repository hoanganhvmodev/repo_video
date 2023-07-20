import CForm from '@components/CForm/CForm'
import CLazySelect from '@components/CLazySelect/CLazySelect'
import CPopup from '@components/CPopup/CPopup'
import CUploadMedia from '@components/CUploadMedia/CUploadMedia'
import { ACTION_FORM } from '@constants/common-form'
import { useUploadMedia } from '@hooks/useUploadMedia'
import { Box, Button, Dialog, TextField } from '@mui/material'
import { ActionForm } from '@type/CommonForm'
import { User } from '@type/User'
import { Server, Video } from '@type/Video'
import { FC, useEffect, useMemo, useState } from 'react'
import { useController, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FAKE_SERVER_LIST, FAKE_USER_LIST } from './listUserFake'

interface FormVideoProps {
  dataFormEdit?: Video
  action?: ActionForm
}

const initDataForm = {
  id: null,
  name: '',
  description: '',
  url: '',
  id_chapter: null,
  id_user: null,
  id_server_provider: null
}

const FormVideo: FC<FormVideoProps> = ({
  action = ACTION_FORM.CREATE,
  dataFormEdit
}) => {
  const initDataFormState = dataFormEdit ? dataFormEdit : initDataForm
  const { t } = useTranslation()
  const [openFormCreate, setOpenFormCreate] = useState<boolean>(true)
  const [openWarningClose, setOpenWarningClose] = useState<boolean>(false)
  const [openSelectSpeaker, setOpenSelectSpeaker] = useState<boolean>(false)
  const [openSelectServer, setOpenSelectServer] = useState<boolean>(false)
  const [optionsSpeaker, setOptionsSpeaker] = useState<User[]>([])
  const [optionsServer, setOptionsServer] = useState<Server[]>([])
  const [keySearchSpeaker, setKeySearchSpeaker] = useState<string>('')
  const [loadingSelectSpeaker, setLoadingSelectSpeaker] =
    useState<boolean>(false)
  const { attachment, handleSelectFile, handleCloseSelectFile } =
    useUploadMedia()
  // const loadingSelectSpeaker = openSelectSpeaker && optionsSpeaker.length === 0
  const loadingSelectServer = openSelectServer && optionsServer.length === 0

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: initDataFormState
  })

  const { field: fieldUser } = useController({ name: 'id_user', control })
  const { field: fieldServerProvider } = useController({
    name: 'id_server_provider',
    control
  })

  // ********** ========Fake handle select Speaker================

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

  // Call API to get list server
  useEffect(() => {
    async function fetchSpeaker() {
      await sleep(100)
      setOptionsServer(FAKE_SERVER_LIST)
    }
    fetchSpeaker()
  }, [loadingSelectServer])

  // Call API to get list speaker
  useEffect(() => {
    async function fetchSpeaker() {
      setLoadingSelectSpeaker(true)
      await sleep(100)
      const result = FAKE_USER_LIST.filter((user) =>
        user.email.includes(keySearchSpeaker)
      )
      setOptionsSpeaker(result)
      setLoadingSelectSpeaker(false)
    }
    if (keySearchSpeaker) {
      fetchSpeaker()
    }
  }, [keySearchSpeaker])
  // **********====================================================

  // *********** Computed ******************
  const getTitle = useMemo(() => {
    if (action === ACTION_FORM.CREATE) return t('formVideo.titleCreate')
    if (action === ACTION_FORM.EDIT) return t('formVideo.titleEdit')
  }, [action])

  const getLabelBtnSubmit = useMemo(() => {
    if (action === ACTION_FORM.CREATE) return t('commonForm.create')
    if (action === ACTION_FORM.EDIT) return t('commonForm.edit')
  }, [action])

  // *********** Methods ******************
  const handleCloseDialog = (event: object, reason: string) => {
    if (reason && reason == 'backdropClick') return
    setOpenWarningClose(false)
    setOpenFormCreate(false)
  }

  const handleCloseWarningClose = () => {
    setOpenWarningClose(false)
  }

  const handleSearchSpeaker = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setKeySearchSpeaker(e.target.value)
  }

  const handleSelectSpeaker = (
    e: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: string
  ) => {
    if (reason === 'clear') {
      setKeySearchSpeaker('')
      setOptionsSpeaker([])
      fieldUser.onChange(null)
    } else {
      if (value.id) {
        fieldUser.onChange(value.id)
      }
    }
  }

  const handleSelectServer = (
    e: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: string
  ) => {
    if (reason === 'clear') {
      fieldServerProvider.onChange([])
    } else {
      const idsServerProvider = value.map((item: Server) => item.id)
      fieldServerProvider.onChange(idsServerProvider)
    }
  }

  const handleUploadVideo = () => {
    console.log(attachment)
    // TODO : return url video
  }

  const handleSubmitForm = (data: Video) => {
    handleUploadVideo()
    console.log(data)
  }

  return (
    <>
      <Dialog
        open={openFormCreate}
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
            <Box sx={{ px: 1 }}>
              <Box
                sx={{
                  width: '300px',
                  height: '150px'
                }}
              >
                <CUploadMedia
                  label={t('formVideo.videoLabel')}
                  attachment={attachment}
                  handleSelectFile={handleSelectFile}
                  handleCloseSelectFile={handleCloseSelectFile}
                  error={{}}
                  type='video'
                  sxContainer={{
                    height: '150px',
                    width: '300px'
                  }}
                />
              </Box>

              <TextField
                sx={{
                  mt: 3
                }}
                label={t('formVideo.nameLabel')}
                variant='standard'
                fullWidth
                {...register('name', {
                  required: t('validatedMessage.notEmpty')
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  mt: 4
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                    width: '30%'
                  }}
                >
                  <CLazySelect<User>
                    label={t('formVideo.speakerLabel')}
                    items={optionsSpeaker}
                    open={openSelectSpeaker}
                    isLoading={loadingSelectSpeaker}
                    fieldValue='id'
                    fieldLabel='email'
                    onOpen={() => {
                      setOpenSelectSpeaker(true)
                    }}
                    onClose={() => {
                      setOpenSelectSpeaker(false)
                    }}
                    onChangeInput={handleSearchSpeaker}
                    onChange={handleSelectSpeaker}
                    registerFormHook={register('id_user', {
                      required: t('validatedMessage.notEmpty')
                    })}
                    error={errors.id_user}
                  ></CLazySelect>
                </Box>
                <Box
                  sx={{
                    width: '50%'
                  }}
                >
                  <CLazySelect<Server>
                    label={t('formVideo.serverLabel')}
                    items={optionsServer}
                    fieldValue='id'
                    fieldLabel='name'
                    open={openSelectServer}
                    multiple
                    isLoading={loadingSelectServer}
                    onOpen={() => {
                      setOpenSelectServer(true)
                    }}
                    onClose={() => {
                      setOpenSelectServer(false)
                    }}
                    onChange={handleSelectServer}
                  ></CLazySelect>
                </Box>
              </Box>
              <TextField
                variant='standard'
                label={t('formVideo.descLabel')}
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
                  setOpenWarningClose(true)
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
        title={t('formVideo.warningCloseTitle')}
        description={t('formVideo.warningCloseDesc')}
        actionCustom={
          <Box>
            <Button
              size='large'
              variant='outlined'
              onClick={handleCloseWarningClose}
              sx={{ width: '100px' }}
            >
              {t('commonForm.no')}
            </Button>
            <Button
              size='large'
              variant='contained'
              color='primary'
              sx={{ color: '#FFF', ml: 2, width: '100px' }}
              onClick={() => {
                handleCloseDialog({}, 'btn-close')
              }}
            >
              {t('commonForm.yes')}
            </Button>
          </Box>
        }
      />
    </>
  )
}

export default FormVideo
