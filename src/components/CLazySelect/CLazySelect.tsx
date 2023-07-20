import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import React from 'react'
import { FieldError } from 'react-hook-form'

interface CLazySelectProps<T> {
  items: T[]
  label: string
  multiple?: boolean
  open?: boolean
  isLoading?: boolean
  fieldValue: string
  fieldLabel: string
  onOpen?: () => void
  onClose?: () => void
  onChange?: (
    e: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: string
  ) => void
  onChangeInput?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error?: FieldError | undefined
  registerFormHook?: any
}

export default function CLazySelect<T>(props: CLazySelectProps<T>) {
  const {
    items,
    open,
    onOpen,
    onClose,
    isLoading,
    onChange,
    multiple,
    label,
    fieldValue,
    fieldLabel,
    error,
    onChangeInput
  } = props
  return (
    <>
      <Autocomplete
        sx={{ width: '100%' }}
        open={open}
        onOpen={() => {
          if (onOpen) {
            onOpen()
          }
        }}
        onClose={() => {
          if (onClose) {
            onClose()
          }
        }}
        multiple={multiple}
        isOptionEqualToValue={(option: any, value: any) =>
          option?.[fieldValue] === value?.[fieldValue]
        }
        getOptionLabel={(option: any) => option?.[fieldLabel]}
        options={items}
        loading={isLoading}
        onChange={onChange}
        onInputChange={(e, newInputValue, reason) => {}}
        renderInput={(params) => (
          <TextField
            key={params.id}
            {...params}
            variant='standard'
            label={label}
            onChange={onChangeInput}
            error={!!error}
            helperText={error?.message}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
    </>
  )
}
