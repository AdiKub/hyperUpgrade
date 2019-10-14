import React from 'react';
import { connect } from 'react-redux';
import {  getCurrentWeather } from '../../store/main/actions';

import ProductList from '../../components/ProductList';

const ProductListContainer = props => <ProductList {...props} />;

const mapStateToProps = store => ({
  currentWeatherStore: store.currentWeatherStore,
  futureWeatherStore: store.futureWeatherStore,
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherAction: (coords = '') => dispatch(getCurrentWeather(coords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);