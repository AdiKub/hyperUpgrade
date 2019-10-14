import React from 'react';
import { connect } from 'react-redux';
import {  getWeatherStart } from '../../store/main/actions';

import ProductCard from '../../components/ProductCard';

const ProductCardContainer = props => <ProductCard {...props} />;

const mapDispatchToProps = dispatch => ({
  getWeatherStartAction: (coords = {}) => dispatch(getWeatherStart(coords)),
});

export default connect(null, mapDispatchToProps)(ProductCardContainer);