import React, { useState, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import useImageSize from './useImageSize'
import Tag from '../Tag/Tag'

export default function ImagePreview (props: any) {
  const { width, height } = useWindowSize()
  const [tags, setTags] = useState([] as any[])
  const imgRef = useRef<HTMLImageElement>(null)
  const { imageWidth, imageHeight } = useImageSize(imgRef)

  return (
    <div className='h100'>
      <img
        ref={imgRef}
        src={props.url}
        style={{ maxWidth: width, maxHeight: height }}
        onClick={(e: any) => { setTags([...tags, { x: e.clientX, y: e.clientY, w0: imageWidth, h0: imageHeight }]) }}
      />
      {tags.map((tag, index) => {
        return (
          <Tag
            key={index}
            coords={{ x: tag.x, y: tag.y }}
            initImageSize={{ width: tag.w0, height: tag.h0 }}
            deltaImageSize={{ width: imageWidth, height: imageHeight }}
          />
        )
      })}
    </div>
  )
}
