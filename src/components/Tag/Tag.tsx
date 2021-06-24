import React, { useState, useEffect } from 'react'

const css = {
  padding: '5px',
  backgroundColor: 'lightgray',
  fontSize: '10pt'
}

interface Props {
  coords: { x: number, y: number };
  initImageSize: { width: number, height: number }
  deltaImageSize: { width: number, height: number }
}

export default function Tag (props: Props) {
  const [coords, setCoords] = useState({ x: props.coords.x, y: props.coords.y })
  const [title, setTitle] = useState('')

  useEffect(() => {
    const x2 = props.coords.x * props.deltaImageSize.width / props.initImageSize.width
    const y2 = props.coords.y * props.deltaImageSize.height / props.initImageSize.height
    setCoords({ x: x2, y: y2 })
  }, [props])

  return (
    title === ''
      ? <input
          style={{ position: 'absolute', top: coords.y, left: coords.x }}
          onBlur={(e: any) => setTitle(e.target.value)}
        />
      : <span style={{ position: 'absolute', top: coords.y, left: coords.x, ...css }}>{title}</span>
  )
}
