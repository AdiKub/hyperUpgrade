import React, { useState } from 'react';
import { fabric } from 'fabric';

import './styles.scss';
import secImg from '../../assets/images/PCs/hpc-lumen-light-box-show-case.png';


const AdminImageEditorControlers = (props) => {
  const { file } = props;
  const [hueValue, setHueValue] = useState(0);
  const [isActive, setActive] = useState(true);


  const activeHue = (bool) => {
    const canvas = new fabric.Canvas('main__fabric__image');

    if (bool) {
      const url = URL.createObjectURL(file)
      fabric.Image.fromURL(url, img2 => {
        canvas.add(img2);

        fabric.Image.fromURL(secImg, img => {

          const filter = new fabric.Image.filters.HueRotation({
            rotation: hueValue
          });

          img.filters.push(filter);
          img.applyFilters();
          canvas.renderAll();
          canvas.add(img);
        }, {
          crossOrigin: 'null'
        })
      });

      setActive(false)

    } else {
      setActive(true)
    }
  };

  const changeHueValue = (value) => {
  };

  return (
    <div className='admin-image-editor-controler'>
      <p className='admin-image-editor-controler-box'>
        <label className='admin-image-editor-controler-box__title'>
          change case color

        <input
            onChange={(e) => file && activeHue(isActive)}
            id="admin-image-editor-controler-hue"
            type="checkbox"
            id="hue" />
        </label>

        <label className='admin-image-editor-controler-box__title'>
          Hue:
          <input

            onChange={(e) => setHueValue(e.target.value)}
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