import React from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const DropZone = (props) => {
  const {setMainImageStartAction, mainImage} = props;
  
  const onDrop = (file) => {
    setMainImageStartAction(file)
  }

  return (
    <Dropzone
      multiple={false}
      noClick={mainImage ? true : false}
      accept="image/*"
      onDrop={(file) => onDrop(file[0])}>
      {({ getRootProps, getInputProps }) => (
        <div
          className='dropzone-image-load dropzone-image-load__logo'
          {...getRootProps()}>
          <span
            onClick={() => onDrop(null)}
            style={{ display: mainImage ? 'flex' : 'none' }}
            className='dropzone-image__logo__icon_delet'>
            <FontAwesomeIcon
              className='dropzone-image__files__icon_delet'
              icon={faTimes} />
          </span>
          <input
            type="file"
            id='mainImage'
            className='dropzone__drop__input'
            name="mainImage"
            {...getInputProps()} />
            <FontAwesomeIcon
              style={{ display: mainImage ? 'none' : 'flex' }}
              className='dropzone-image__logo__icon'
              icon={faImage} />
        </div>
      )}
    </Dropzone>
  )
}

export default DropZone;

