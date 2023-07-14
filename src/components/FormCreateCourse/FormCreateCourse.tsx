import CCheckbox from '@components/CCheckbox/CCheckbox'
import CForm from '@components/CForm/CForm'
import CInputTags from '@components/CInputTags/CInputTags'
import CPopup from '@components/CPopup/CPopup'
import CSelect from '@components/CSelect/CSelect'
import CUploadImage from '@components/CUploadImage/CUploadImage'
import { LEVEL_COURSE } from '@constants/course'
import {
  Box,
  Button,
  Dialog,
  Grid,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import { DataFormCourse, ILevel, Level } from '@type/Course'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface FormCreateCourseProps {}

const initDataForm = {
  id: null,
  name: '',
  thumb: '',
  level: Level.EASY,
  isSequence: false,
  tags: ['abc', 'bcd'],
  description: ''
}

const FormCreateCourse: FC<FormCreateCourseProps> = ({}) => {
  const { t } = useTranslation()
  const [openFormCreate, setOpenFormCreate] = useState<boolean>(true)
  const [openWarningClose, setOpenWarningClose] = useState<boolean>(false)
  const [dataForm, setDataForm] = useState<DataFormCourse>(initDataForm)

  const handleCloseDialog = (event: object, reason: string) => {
    if (reason && reason == 'backdropClick') return
    setOpenWarningClose(true)
    setOpenFormCreate(false)
  }

  const handleChangeLevel = (event: SelectChangeEvent) => {
    setDataForm((pre) => ({ ...pre, level: +event.target.value }))
  }

  const handleChangeSequence = () => {
    setDataForm((pre) => ({ ...pre, isSequence: !pre.isSequence }))
  }

  const handleSelectedTags = (newTags: string[]) => {
    setDataForm((pre) => ({ ...pre, newTags }))
  }

  const handleCloseWarningClose = () => {
    setOpenWarningClose(false)
  }

  const handleChangeImage = () => {}

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
                    {/* ================= INPUT NAME COURSE ================= */}
                    <TextField
                      label={t('createCourse.nameLabel')}
                      variant='standard'
                      fullWidth
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
                    <Grid xs={5}>
                      <CSelect<ILevel>
                        value={dataForm.level + ''}
                        label={t('createCourse.nameLabel')}
                        items={LEVEL_COURSE}
                        useI18n
                        onChange={handleChangeLevel}
                      />
                    </Grid>
                    {/* ================= INPUT REQUIRE SEQUENCE ================= */}
                    <Grid xs={5}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CCheckbox
                          value={dataForm.isSequence}
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
                      tags={dataForm.tags}
                    />
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <TextField
                      variant='standard'
                      label={t('createCourse.descLabel')}
                      multiline
                      rows={6}
                      sx={{ width: '100%' }}
                    />
                  </Box>
                </Grid>
                {/* ======= RIGHT FORM ================= */}
                <Grid xs={4}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <CUploadImage
                      label={t('createCourse.thumbLabel')}
                      onChange={handleChangeImage}
                      error={{}}
                      sxContainer={{
                        height: '100px',
                        width: '200px',
                        
                      }}
                    />
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
