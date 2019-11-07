import React, { useState } from 'react';
import 'fabric-webpack'

import DropZone from '../DropZone'
import DesignCanvas from '../DesignCanvas'

import './styles.scss';

const AdminImageEditor = () => {

   
  return (
    <div className='admin-image-editor'>
      <div className='container'>
        <div className='admin-image-editor-wrapper'>
          <div  className='admin-image-editor-canvas'>
             <DropZone />     

            <DesignCanvas  
              url="https://img5.goodfon.com/wallpaper/big/4/ab/super-sabre-north-american-f-100-super-sabre-sverkhzvukovoi.jpg" 
            />
          </div>
          <div className='admin-image-editor-controls'>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminImageEditor;