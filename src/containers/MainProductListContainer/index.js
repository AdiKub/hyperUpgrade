import React from 'react';
import { connect } from 'react-redux';
import {  getPcsByCotegoryStart } from '../../store/actions';

import MainProductList from '../../components/MainProductList';

const MainProductListContainer = props => <MainProductList {...props} />;

const mapDispatchToProps = dispatch => ({
  getPcsByCotegoryStartAction: (coords = {}) => dispatch(getPcsByCotegoryStart(coords)),
});

export default connect(null, mapDispatchToProps)(MainProductListContainer);