import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

interface CSelectProps<T> {
  items: T[]
  value: string
  label: string
  id?: string
  onChange?: (e: SelectChangeEvent<string>) => void
  useI18n?: boolean
  registerHookForm?: any
}

export default function CSelect<
  T extends { value: number | string; label: string }
>(props: CSelectProps<T>) {
  const { t } = useTranslation()
  const { items, value, onChange, label, id, useI18n, registerHookForm } = props
  return (
    <FormControl variant='standard' sx={{ width: '100%' }}>
      <InputLabel id={id ? id : label}>{label}</InputLabel>

      <Select
        labelId={id ? id : label}
        value={value}
        onChange={onChange}
        label={label}
        inputProps={{
          inputRef: (ref: any) => {
            if (!ref) return
            if (registerHookForm) {
              registerHookForm()
            }
          }
        }}
      >
        {items &&
          items.map((item) => (
            <MenuItem value={item.value}>
              {useI18n ? t(item.label) : item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}
