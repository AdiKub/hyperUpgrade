import React, { useEffect } from 'react'


const DesignCanvas = (props) => {
  const fabric = window.fabric
  const { url="https://hyperpc.ru/images/product/lumen/_temp/gallery-vinyl/hpc-lumen-vinyl-show-1.jpg" } = props

  useEffect(()=>{
    const canvas = new fabric.Canvas(DesignCanvas.c)
   
    fabric.Image.fromURL(url, img => {
      img.scale(0.3)  
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
