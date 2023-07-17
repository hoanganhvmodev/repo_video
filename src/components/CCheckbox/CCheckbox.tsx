import { Checkbox, InputLabel } from '@mui/material'
import { ChangeEvent } from 'react'

interface CCheckboxProps<T> {
  item?: T
  value: boolean
  label: string
  id?: string
  sxCheckBoxCustom?: object
  onChange: (e: ChangeEvent<HTMLInputElement> , item?: T) => void
}

export default function CCheckbox<T>(props: CCheckboxProps<T>) {
  const { value, item, label, sxCheckBoxCustom, id, onChange } = props
  return (
    <>
      <Checkbox
        checked={value}
        onChange={(e) => {
          onChange(e, item)
        }}
        sx={{ ...sxCheckBoxCustom }}
      />
      <InputLabel id={id ? id : label}>{label}</InputLabel>
    </>
  )
}
