import React, { useState } from 'react';
import 'fabric-webpack'

import './styles.scss';

const AdminImageEditorControlers = (props) => { 
  const  { file } = props;
  const [hueValue, setHueValue] = useState(0);
  const [isActive, setActive] = useState(false);
  const fabric = window.fabric;

  const activeHue = ( bool ) => {
    if (bool) {
      const url = URL.createObjectURL(file)
      console.log(file.name)
      
      // fabric.Image.fromURL(url, img => {
      //   img.scale(1)  
      //   canvas.add(img)
      // })
    }
    
  };

  const changeHueValue = (value)=> {
    const canvas = new fabric.Canvas('c')
    const obj = canvas.getActiveObject()
    if (isActive) {
      setHueValue(value);
      
      // var filter = new fabric.Image.filters.HueRotation({
      //   rotation: value
      // });
      // obj.filters.push(filter);
      // obj.applyFilters();

    }
  };

  return (
    <div className='admin-image-editor-controler'>
       <p className='admin-image-editor-controler-box'>
        <label className='admin-image-editor-controler-box__title'>
          change case color
        <input
          onChange={(e)=>activeHue(!isActive)}
          id="admin-image-editor-controler-hue"  
          type="checkbox" 
          id="hue"/>
        </label>
        <label className='admin-image-editor-controler-box__title'>
          Hue: 
          <input
            onChange={(e)=>changeHueValue(e.target.value)}
            className='admin-image-editor-controler-box_range' 
            type="range" 
            id="admin-image-editor-controler-hue_value" 
            min="-1" 
            max="1" 
            step="0.1"/>
          </label>
       </p>
    </div>
  )
};

export default AdminImageEditorControlers;