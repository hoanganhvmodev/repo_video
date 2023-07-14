import CForm from '@components/CForm/CForm'
import CPopup from '@components/CPopup/CPopup'
import { Speaker } from '@mui/icons-material'
import { Box, Button, Dialog, Grid, TextField } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CLazySelect from '@components/CLazySelect/CLazySelect'

interface FormCreateCourseProps {}

// *** Fake interface Speaker
interface Speaker {
  name: string
  id: number
}

const fakeSpeaker = [
  { name: 'The Shawshank Redemption', id: 1993 },
  { name: 'The Godfather', id: 1972 },
  { name: 'The Godfather: Part II', id: 1974 }
]

// ***

const FormCreateCourse: FC<FormCreateCourseProps> = ({}) => {
  const { t } = useTranslation()
  const [openFormCreate, setOpenFormCreate] = useState<boolean>(true)
  const [openWarningClose, setOpenWarningClose] = useState<boolean>(false)
  const [openSelectSpeaker, setOpenSelectSpeaker] = useState<boolean>(false)

  // ********** ========Fake handle select Speaker================
  const [optionsSpeaker, setOptionsSpeaker] = useState<Speaker[]>([])
  const [keySearchSpeaker, setKeySearchSpeaker] = useState<string>('')
  const loadingSelectSpeaker = openSelectSpeaker && optionsSpeaker.length === 0
  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

  // Call API to get list speaker
  useEffect(() => {
    async function fetchSpeaker() {
      await sleep(10000)
      setOptionsSpeaker(fakeSpeaker)
    }
    fetchSpeaker()
  }, [loadingSelectSpeaker])
  // **********====================================================

  const handleCloseDialog = (event: object, reason: string) => {
    if (reason && reason == 'backdropClick') return
    setOpenWarningClose(true)
    setOpenFormCreate(false)
  }

  const handleCloseWarningClose = () => {
    setOpenWarningClose(false)
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
          title={t('createCourse.title')}
          sxCustom={{
            width: '900px'
          }}
          inputArea={
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2}>
                {/* ======= LEFT FORM ================= */}
                <Grid xs={8}>
                  <Box>
                    <TextField
                      label={t('createCourse.nameLabel')}
                      variant='standard'
                    />
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <CLazySelect<Speaker>
                      items={optionsSpeaker}
                      open={openSelectSpeaker}
                      isLoading={loadingSelectSpeaker}
                      onOpen={() => {
                        setOpenSelectSpeaker(true)
                      }}
                      onClose={() => {
                        setOpenSelectSpeaker(false)
                      }}
                    ></CLazySelect>
                  </Box>
                </Grid>
                {/* ======= RIGHT FORM ================= */}
                <Grid xs={4}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button>Hello</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
            >
              {t('commonForm.yes')}
            </Button>
          </Box>
        }
      />
    </>
  )
}

export default FormCreateCourse
