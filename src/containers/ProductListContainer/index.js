import React from 'react';
import { connect } from 'react-redux';
//import {  getCurrentWeather } from '../../store/main/actions';

import ProductList from '../../components/ProductList';

const ProductListContainer = props => <ProductList {...props} />;

const mapStateToProps = store => ({
  cotegoryPCs: store.main.cotegoryPCs,
});

// const mapDispatchToProps = dispatch => ({
//   getCurrentWeatherAction: (coords = '') => dispatch(getCurrentWeather(coords)),
// });

export default connect(mapStateToProps, null)(ProductListContainer);