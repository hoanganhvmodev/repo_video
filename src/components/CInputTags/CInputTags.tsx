import { Chip, TextField } from '@mui/material'
import Downshift, { GetInputPropsOptions } from 'downshift'
import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react'

interface CInputTagsProps {
  selectedTags: any
  placeholder: string
  tags: string[]
  hint?: string
  sxChipCustom?: object
}

const CInputTags: FC<CInputTagsProps> = ({
  selectedTags,
  placeholder,
  tags,
  hint,
  sxChipCustom = {
    my: 0.5,
    mx: 0.25
  }
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  useEffect(() => {
    setSelectedItem(tags)
  }, [tags])

  useEffect(() => {
    selectedTags(selectedItem)
  }, [selectedItem, selectedTags])

  function handleAddTags(value: string) {
    const newSelectedItem = [...selectedItem]
    const duplicatedValues = newSelectedItem.indexOf(
      value.trim()
    )

    if (duplicatedValues !== -1) {
      setInputValue('')
      return
    }
    if (!value.replace(/\s/g, '').length) return

    newSelectedItem.push(value.trim())
    setSelectedItem(newSelectedItem)
    setInputValue('')
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (event.key === ' ') {
      handleAddTags(event.currentTarget.value)
    }
    // Handle remove tag
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === 'Backspace'
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1))
    }
  }
  function handleChange(item: any) {
    let newSelectedItem = [...selectedItem]
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item]
    }
    setInputValue('')
    setSelectedItem(newSelectedItem)
  }

  const handleDelete = (item: any) => () => {
    const newSelectedItem = [...selectedItem]
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1)
    setSelectedItem(newSelectedItem)
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputValue(event.target.value)
  }
  return (
    <Fragment>
      <Downshift
        id='downshift-multiple'
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onFocus } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder
          } as GetInputPropsOptions)
          return (
            <div>
              <TextField
                value={inputValue}
                variant='standard'
                sx={{
                  width: '100%'
                }}
                helperText={hint}
                InputProps={{
                  startAdornment: selectedItem.map((item) => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      sx={{ ...sxChipCustom }}
                      onDelete={handleDelete(item)}
                    />
                  )),
                  onBlur: (event) => {
                    handleAddTags(event.currentTarget.value)
                  },
                  onChange: (event) => {
                    handleInputChange(event)
                  },
                  onFocus,
                  onKeyDown: (event) => {
                    handleKeyDown(event)
                  }
                }}
                label={placeholder}
              />
            </div>
          )
        }}
      </Downshift>
    </Fragment>
  )
}

export default CInputTags
