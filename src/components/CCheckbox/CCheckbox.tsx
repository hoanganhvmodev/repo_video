import { Checkbox, InputLabel } from '@mui/material'
import { ChangeEvent } from 'react'

interface CCheckboxProps<T> {
  item?: T
  value: boolean
  label: string
  id?: string
  sxCheckBoxCustom?: object
  onChange: (e: ChangeEvent<HTMLInputElement>, item?: T) => void
}

export default function CCheckbox<T>(props: CCheckboxProps<T>) {
  const { value, item, label, sxCheckBoxCustom, id, onChange } = props
  return (
    <>
      <Checkbox
        id={id ? id : `${value}-${label}`}
        checked={value}
        onChange={(e) => {
          onChange(e, item)
        }}
        sx={{ ...sxCheckBoxCustom }}
      />
      <label
        className='select-none MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-animated css-1e802rj-MuiFormLabel-root-MuiInputLabel-root'
        htmlFor={id ? id : `${value}-${label}`}
        style={{
          cursor: 'pointer'
        }}
      >
        {label}
      </label>
    </>
  )
}
