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

            <DesignCanvas />
          </div>
          <div className='admin-image-editor-controls'>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminImageEditor;