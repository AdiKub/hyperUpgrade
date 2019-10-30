import React from 'react';
import { connect } from 'react-redux';
import { getPcsByCotegoryStart } from '../../store/actions';

import ProductListControls from '../../components/ProductListControls';

const ProductListControlsContainer = props => <ProductListControls {...props} />;

const mapStateToProps = store => ({
  cotegoryPCs: store.main.cotegoryPCs,
});

const mapDispatchToProps = dispatch => ({
  getPcsByCotegoryStartAction: (category = {}) => dispatch(getPcsByCotegoryStart(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListControlsContainer);