import React, { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Tag from './Tag'

export default function Image (props: any) {
  const { width, height } = useWindowSize()
  const [tags, setTag] = useState([] as any[])

  function clickImage (event: any) {
    setTag([...tags, <Tag key={tags.length} x={event.clientX} y={event.clientY} />])
  }

  return (
    <div>
      <img
        src={props.url}
        style={{ maxWidth: width, maxHeight: height }}
        onClick={clickImage}
      />
      {tags}
    </div>
  )
}
