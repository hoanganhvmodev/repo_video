import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import React from 'react'

interface CLazySelectProps<T> {
  items: T[]
  open?: boolean
  isLoading?: boolean
  onOpen?: () => void
  onClose?: () => void
  onChange?: (e: React.SyntheticEvent<Element, Event>, value: any) => void
}

export default function CLazySelect<T extends { id: number; name: string }>(
  props: CLazySelectProps<T>
) {
  const { items, open, onOpen, onClose, isLoading, onChange } = props
  return (
    <>
      <Autocomplete
        sx={{ width: 300 }}
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
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option: T) => option.name}
        options={items}
        loading={isLoading}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            key={params.id}
            {...params}
            variant='standard'
            label='Asynchronous'
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
