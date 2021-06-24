import React, { useState } from 'react'
import ImagePreview from './ImagePreview/ImagePreview'

export default function App () {
  const [file, setFile] = useState({ isLoaded: false, url: '' })

  return (
    <div className='h100'>
      <div hidden={file.isLoaded}>
        <input type="file" onChange={(e: any) => { setFile({ isLoaded: true, url: URL.createObjectURL(e.target.files[0]) }) }} />
      </div>
      {file.isLoaded ? <ImagePreview url={file.url} /> : null}
    </div>
  )
}
