import { Checkbox, InputLabel } from '@mui/material'

interface CCheckboxProps<T> {
  item?: T
  value: boolean
  label: string
  id?: string
  sxCheckBoxCustom?: object
  onChange: (item?: T) => void
}

export default function CCheckbox<T>(props: CCheckboxProps<T>) {
  const { value, item, label, sxCheckBoxCustom, id, onChange } = props
  return (
    <>
      <Checkbox
        checked={value}
        onChange={(e) => {
          onChange(item)
        }}
        sx={{ ...sxCheckBoxCustom }}
      />
      <InputLabel id={id ? id : label}>{label}</InputLabel>
    </>
  )
}
