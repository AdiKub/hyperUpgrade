import React, { useEffect } from 'react'


const DesignCanvas = (props) => {
  const { file } = props
  const fabric = window.fabric
  const width = file ? 500 : 1;
  const height = file ? 350 : 1;

  useEffect(()=>{
    if (file) {
      const url = URL.createObjectURL(file)
      const canvas = new fabric.Canvas('drob-canvas')

      fabric.Image.fromURL(url, img => {
        img.scale(0.3)  
        canvas.add(img)
      })
    } else {
      const elem = document.getElementById('drob-canvas');
      elem.parentNode.removeChild(elem);
    }
  })

  return (
    
    <canvas
    
      id='drob-canvas'
      width={width}
      height={height}
    >
      {console.log(file)}
    </canvas>
  )
}

export default DesignCanvas
