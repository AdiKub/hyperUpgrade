import React from 'react';
import 'fabric-webpack'

import DropZoneContainer from '../../containers/DropZoneContainer';
import DesignCanvasContainer from '../../containers/DesignCanvasContainer'

import './styles.scss';

const AdminImageEditor = () => { 
    
  return (
    <div className='admin-image-editor'>
      <div className='container'>
        <div className='admin-image-editor-wrapper'>
          <div  className='admin-image-editor-canvas'>
            <DropZoneContainer />  
            <DesignCanvasContainer />
          </div>
          <div className='admin-image-editor-controls'>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminImageEditor;