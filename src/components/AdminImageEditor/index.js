import React, { useState } from 'react';
import 'fabric-webpack'

import DropZoneContainer from '../../containers/DropZoneContainer'

import './styles.scss';

const AdminImageEditor = () => {

   
  return (
    <div className='admin-image-editor'>
      <div className='container'>
        <div className='admin-image-editor-wrapper'>
          <div  className='admin-image-editor-canvas'>
            <DropZoneContainer />     
          </div>
          <div className='admin-image-editor-controls'>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminImageEditor;