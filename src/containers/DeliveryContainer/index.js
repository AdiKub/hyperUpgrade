import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../store/actions';

import Delivery from '../../components/Delivery';

const DeliveryContainer = props => <Delivery {...props} />;

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContainer);