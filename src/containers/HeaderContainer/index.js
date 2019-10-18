import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = store => ({
  pcCart: store.pcCart.pcCart,
});

export default connect(mapStateToProps, null)(HeaderContainer);