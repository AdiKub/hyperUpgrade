import React from 'react';
import { connect } from 'react-redux';
import { setPcToCartStart, deletePcFromCartStart } from '../../store/actions';

import ProductCart from '../../components/ProductCart';

const ProductCartContainer = props => <ProductCart {...props} />;

const mapStateToProps = store => ({
  cart: store.pcCart.pcCart,
});

const mapDispatchToProps = dispatch => ({
  setPcToCartStartAction: (pc) => dispatch(setPcToCartStart(pc)),
  deletePcFromCartStartAction: (pc)=> dispatch(deletePcFromCartStart(pc))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartContainer);