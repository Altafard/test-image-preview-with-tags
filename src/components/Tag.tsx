import React, { useState, useEffect } from 'react'
import '../App.css'

interface Props {
  x: number;
  y: number;
  w: number;
  h: number;
  dw: number;
  dh: number;
}

export default function Tag (props: Props) {
  const [title, setTitle] = useState('')
  const [coords, setCoords] = useState({ x: props.x, y: props.y })

  function inputTitle (event: any) {
    setTitle(event.target.value)
  }

  useEffect(() => {
    const x2 = props.x * props.dw / props.w
    const y2 = props.y * props.dh / props.h
    setCoords({ x: x2, y: y2 })
  }, [props])

  return (
    title === ''
      ? <input onBlur={inputTitle} style={{ position: 'absolute', top: coords.y, left: coords.x }} />
      : <span className='tag' style={{ position: 'absolute', top: coords.y, left: coords.x }}>{title}</span>
  )
}
