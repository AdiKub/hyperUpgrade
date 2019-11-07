import React, { useEffect } from 'react'


const DesignCanvas = (props) => {
  const fabric = window.fabric
  const { url } = props

  useEffect(()=>{
    const canvas = new fabric.Canvas(DesignCanvas.c)
   
    fabric.Image.fromURL(url, img => {
      img.scale(0.4)  
      canvas.add(img)
    })
  })
  
  return (
    <canvas 
      ref={c => DesignCanvas.c = c} 
      width={390} 
      height={390}
      />
  )
}

export default DesignCanvas
