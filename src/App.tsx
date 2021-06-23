import React, { useState } from 'react'
import Image from './components/Image'

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
    <div>
      <div hidden={file.isLoaded}>
        <input type="file" onChange={handleChange} />
      </div>
      <Image url={file.url} hidden={!file.isLoaded} />
    </div>
  )
}
