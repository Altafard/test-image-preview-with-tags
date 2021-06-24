import React, { useState } from 'react'
import ImagePreview from './components/ImagePreview'

export default function App () {
  const [file, setFile] = useState({
    isLoaded: false,
    url: ''
  })

  function handleChange (event: any) {
    setFile({
      isLoaded: true,
      url: URL.createObjectURL(event.target.files[0])
    })
  }

  return (
    <div className='h100'>
      <div hidden={file.isLoaded}>
        <input type="file" onChange={handleChange} />
      </div>
      {file.isLoaded ? <ImagePreview url={file.url} /> : null}
    </div>
  )
}
