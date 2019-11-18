import React, { useState } from 'react';
import 'fabric-webpack'

import './styles.scss';
import secImg from '../../assets/images/PCs/hpc-lumen-light-box-show-case.png';

const AdminImageEditorControlers = (props) => {
  const { file } = props;
  const [hueValue, setHueValue] = useState(0);
  const [isActive, setActive] = useState(true);
  const fabric = window.fabric;

  const activeHue = (bool) => {

    const canvas = new fabric.Canvas('main__fabric__image')

    if (bool) {

      const imageElement = document.createElement('bland_img');
      imageElement.src = secImg;
      const fImage = new fabric.Image(imageElement)

      const url = URL.createObjectURL(file)
      fabric.Image.fromURL(url, function (img) {

        const filter = new fabric.Image.filters.Blend({
          image: fImage,
          mode: 'multiply',
          alpha: 0.5
        });

        img.filters.push(filter);
        img.applyFilters();
        canvas.renderAll()

        canvas.add(img);
      });

      setActive(false)
    } else {
      setActive(true)
    }
  };

  const changeHueValue = (value) => {
    const canvas = new fabric.Canvas('c')
    const obj = canvas.getActiveObject()
    if (isActive) {
      setHueValue(value);
      // const filter = new fabric.Image.filters.HueRotation({
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
            onChange={(e) => activeHue(isActive)}
            id="admin-image-editor-controler-hue"
            type="checkbox"
            id="hue" />
        </label>

        <label className='admin-image-editor-controler-box__title'>
          Hue:
          <input

            onChange={(e) => changeHueValue(e.target.value)}
            className='admin-image-editor-controler-box_range'
            type="range"
            id="admin-image-editor-controler-hue_value"
            min="-1"
            max="1"
            step="0.1" />
        </label>
      </p>
    </div>
  )
};

export default AdminImageEditorControlers;