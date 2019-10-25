import React from 'react';
import { connect } from 'react-redux';
import {  getPcsByCotegoryStart, loginUserStart } from '../../store/actions';
import Header from '../../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = store => ({
  pcCart: store.pcCart.pcCart,
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  getPcsByCotegoryStartAction: (caterory) => dispatch(getPcsByCotegoryStart(caterory)),
  loginUserStartAction: (requestParams) => dispatch(loginUserStart(requestParams)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);