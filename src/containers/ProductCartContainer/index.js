import React from 'react';
import { connect } from 'react-redux';
import {   } from '../../store/actions';

import ProductCart from '../../components/ProductCart';

const ProductCartContainer = props => <ProductCart {...props} />;

const mapStateToProps = store => ({
  cart: store.pcCart.pcCart,
});

// const mapDispatchToProps = dispatch => ({
//   getWeatherStartAction: (coords = {}) => dispatch(getWeatherStart(coords)),
// });

export default connect(mapStateToProps, null)(ProductCartContainer);