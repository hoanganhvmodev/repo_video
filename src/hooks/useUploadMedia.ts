import { ChangeEvent, useState } from 'react'

export const useUploadMedia = () => {
  const [attachment, setAttachment] = useState<any>(null)

  // Can custom additional handle in specific form
  // Example : handleSelectFileCustom () {
  // handleSelectFileFile ();
  // do other thing
  // }
  // Here just common
  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    const fileSelected = e.target.files?.[0]
    if (fileSelected) {
      const url = URL.createObjectURL(fileSelected)
      setAttachment({ ...fileSelected, url: url })
    }
  }

  // Can custom additional handle in specific form
  // Example : handleCloseSelectCustom () {
  // handleCloseSelectFile ();
  // do other thing
  // }
  // Here just common
  function handleCloseSelectFile() {
    setAttachment(null)
  }

  return { attachment, handleSelectFile, handleCloseSelectFile }
}
