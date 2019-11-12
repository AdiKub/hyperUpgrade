import React, { useEffect } from 'react'
import { conditionalExpression } from '@babel/types';

const DesignCanvas = (props) => {
  const { file } = props
  const fabric = window.fabric
  const width = file ? 500 : 1;
  const height = file ? 350 : 1;

  useEffect(()=>{
    if (file) {
      const url = URL.createObjectURL(file)
      const canvas = new fabric.Canvas('main__fabric__image')
      
      fabric.Image.fromURL(url, img => {
        img.scale(1)  
        canvas.add(img)
      })
    }
  })
  
  return (
    <canvas
      id='main__fabric__image'
      width={width}
      height={height}
    />
  )
}

export default DesignCanvas
