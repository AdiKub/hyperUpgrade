import React from 'react';
import { connect } from 'react-redux';
import { setPcToCartStart } from '../../store/actions';

import Login from '../../components/Login';

const LoginContainer = props => <Login {...props} />;

const mapStateToProps = store => ({
  cart: store.pcCart.pcCart,
});

// const mapDispatchToProps = dispatch => ({
//   setPcToCartStartAction: () => dispatch(setPcToCartStart()),
// });

export default connect(mapStateToProps, null)(LoginContainer);