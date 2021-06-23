import React from 'react'

interface Props {
  x: number;
  y: number;
}

export default function Tag (props: Props) {
  return (
    <span style={{ position: 'fixed', top: props.y, left: props.x }}>tag</span>
  )
}
