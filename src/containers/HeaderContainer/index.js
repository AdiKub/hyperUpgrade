import React from 'react';
import { connect } from 'react-redux';
import {  getPcsByCotegoryStart } from '../../store/actions';
import Header from '../../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = store => ({
  pcCart: store.pcCart.pcCart,
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  getPcsByCotegoryStartAction: (caterory) => dispatch(getPcsByCotegoryStart(caterory)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);