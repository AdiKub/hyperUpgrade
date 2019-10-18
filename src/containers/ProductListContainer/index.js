import React from 'react';
import { connect } from 'react-redux';
import {  getPcsByCotegoryStart } from '../../store/actions';

import ProductList from '../../components/ProductList';

const ProductListContainer = props => <ProductList {...props} />;

const mapStateToProps = store => ({
  cotegoryPCs: store.main.cotegoryPCs,
});

const mapDispatchToProps = dispatch => ({
  getPcsByCotegoryStartAction: (category = {}) => dispatch(getPcsByCotegoryStart(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);