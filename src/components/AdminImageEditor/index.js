import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'fabric-webpack'

import DesignCanvas from './DesignCanvas'
import Image from './Image'

import './styles.scss';

const AdminImageEditor = () => {
  const [mainImageState, dropMainImage] = useState(null)
   
  return (
    <div className='admin-image-editor'>
      <div className='container'>
        <div className='admin-image-editor-wrapper'>
          <div  className='admin-image-editor-canvas'>
          <DesignCanvas>
            <Image url="https://img5.goodfon.com/wallpaper/big/4/ab/super-sabre-north-american-f-100-super-sabre-sverkhzvukovoi.jpg" scale={0.5} top={100} />
         </DesignCanvas>
{/*            
            <Dropzone
              multiple={false}
              noClick={mainImageState ? true : false}
              accept="image/*"
              onDrop={(file) => dropMainImage(file)}>
              {({ getRootProps, getInputProps }) => (
                <div
                  className='admin-image-editor-image-load admin-image-editor-image-load__logo'
                  {...getRootProps()}>
                  <span
                    onClick={() => dropMainImage(null)}
                    style={{ display: !mainImageState ? 'none' : 'flex' }}
                    className='admin-image-editor-image__logo__icon_delet'>
                    <FontAwesomeIcon
                      className='admin-image-editor-image__files__icon_delet'
                      icon={faTimes} />
                  </span>
                  <input
                    type="file"
                    id='mainImage'
                    className='admin-image-editor__drop__input'
                    name="mainImage"
                    {...getInputProps()} />

                  {mainImageState &&
                    <img
                      src={URL.createObjectURL(mainImageState[0])}
                      alt='logo'
                      className='admin-image-editor-image__logo' />}
                  <FontAwesomeIcon
                    style={{ display: mainImageState ? 'none' : 'flex' }}
                    className='admin-image-editor-image__logo__icon'
                    icon={faImage} />
                </div>
              )}
            </Dropzone>
          */}
          </div>
          <div className='admin-image-editor-controls'>

          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminImageEditor;