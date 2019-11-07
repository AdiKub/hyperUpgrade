import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const DropZone = () => {
  const [mainImageState, dropMainImage] = useState(null)

  return (
    <Dropzone
      multiple={false}
      noClick={mainImageState ? true : false}
      accept="image/*"
      onDrop={(file) => dropMainImage(file)}>
      {({ getRootProps, getInputProps }) => (
        <div
          className='dropzone-image-load dropzone-image-load__logo'
          {...getRootProps()}>
          <span
            onClick={() => dropMainImage(null)}
            style={{ display: !mainImageState ? 'none' : 'flex' }}
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

          {mainImageState &&
            <img
              src={URL.createObjectURL(mainImageState[0])}
              alt='logo'
              className='dropzone-image__logo' />}
          <FontAwesomeIcon
            style={{ display: mainImageState ? 'none' : 'flex' }}
            className='dropzone-image__logo__icon'
            icon={faImage} />
        </div>
      )}
    </Dropzone>
  )
}

export default DropZone;

