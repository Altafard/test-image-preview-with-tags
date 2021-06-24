import React, { useState, useEffect, useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Tag from './Tag'

function useImageSize (img: any) {
  const [imageSize, setImageSize] = useState({
    iw: img.current?.width,
    ih: img.current?.height
  })

  useEffect(() => {
    const imgRef = img.current
    function handleImageSize () {
      setImageSize({ iw: imgRef.width, ih: imgRef.height })
    }
    imgRef.addEventListener('load', handleImageSize)
    return () => imgRef.removeEventListener('load', handleImageSize)
  }, [img])

  useEffect(() => {
    const imgRef = img.current
    function handleImageSize () {
      setImageSize({ iw: imgRef.width, ih: imgRef.height })
    }
    window.addEventListener('resize', handleImageSize)
    return () => window.removeEventListener('resize', handleImageSize)
  }, [img])

  return imageSize
}

export default function ImagePreview (props: any) {
  const { width, height } = useWindowSize()
  const [tags, setTags] = useState([] as any[])
  const imgRef = useRef<HTMLImageElement>(null)
  const { iw, ih } = useImageSize(imgRef)

  function clickImage (event: any) {
    setTags([...tags, { x: event.clientX, y: event.clientY, w0: iw, h0: ih }])
  }

  return (
    <div className='h100'>
      <img
        ref={imgRef}
        src={props.url}
        style={{ maxWidth: width, maxHeight: height }}
        onClick={clickImage}
      />
      {tags.map((tag, index) => <Tag key={index} x={tag.x} y={tag.y} w={tag.w0} h={tag.h0} dw={iw} dh={ih} />)}
    </div>
  )
}
