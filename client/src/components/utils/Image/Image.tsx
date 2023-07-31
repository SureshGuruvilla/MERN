import React from 'react'
interface ImageProps{
  src: string;
  alt: string
}
function Image(props:ImageProps) {
  return (
    <img src={props.src} alt={props.alt} loading='lazy'/>
  )
}

export default Image