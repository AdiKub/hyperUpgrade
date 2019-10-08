import React from 'react';

import './styles.scss';
import mainImages from '../../assets/images/gaming-pc-alt-3.jpg'

const Main = () => {

  return (
    <div className='main'>
      <div className='container'>
        <div className='main-wrapper'>
          <h1 className='main__title'>
            Gaming Computers and System Blocks
          </h1>
          <div className='main-image-wrapper'>
            <img
              src={mainImages}
              alt="PC"
              className='main__image' />
            <div className='main-text-wrapper'>
              <span className='main__text'>
                When all the most powerful technologies
                inherent in central and graphic processors
                are combined in one system unit,
                this is the energy of HYPERUPGRADE computers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main