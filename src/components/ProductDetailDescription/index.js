import React from 'react';

import ProductInteractive from '../ProductInteractive';
import './styles.scss';
import pcimage from '../../assets/images/categoryImages/01.jpg'

const ProductDetailDescription = () => {

  return (
    <div className='product-detail-description'>
      <div className='container'>
        <div className='product-detail-description-wrapper'>
          <div className='product-detail-description-image-wrapper'>
            <img 
              alt='pc'
              className='product-detail-description-image' 
              src={pcimage} />
          </div>
          <div className='product-detail-description-info'> 
            <h2 className='product-detail-description-info__title'>HYPER</h2>
            <h3 className='product-detail-description-info__title'> killer </h3>
            <p className='product-detail-description-info__text' >Sed diam rutrum nam: ipsum sed orci odio: vitae adipiscing rutrum. Sit tempus sed, integer auctor nam sodales ipsum porttitor mattis eget. Ut porta porttitor metus sed odio molestie maecenas lorem metus orci massa. Donec et fusce ipsum nulla nec arcu: vitae tempus, orci, enim metus at odio. Congue vitae quisque elementum ipsum — at risus metus ut: nec massa, in</p>
            <ProductInteractive/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailDescription;