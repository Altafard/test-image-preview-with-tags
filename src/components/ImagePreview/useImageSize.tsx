import { useState, useEffect } from 'react'

export default function useImageSize (img: any) {
  const [imageSize, setImageSize] = useState({
    imageWidth: img.current?.width,
    imageHeight: img.current?.height
  })
  useEffect(() => {
    const imgRef = img.current
    function handleImageSize () {
      setImageSize({ imageWidth: imgRef.width, imageHeight: imgRef.height })
    }
    imgRef.addEventListener('load', handleImageSize)
    return () => imgRef.removeEventListener('load', handleImageSize)
  }, [img])
  useEffect(() => {
    const imgRef = img.current
    function handleImageSize () {
      setImageSize({ imageWidth: imgRef.width, imageHeight: imgRef.height })
    }
    window.addEventListener('resize', handleImageSize)
    return () => window.removeEventListener('resize', handleImageSize)
  }, [img])
  return imageSize
}
