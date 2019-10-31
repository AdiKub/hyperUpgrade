import React from 'react';
import { connect } from 'react-redux';
import { setPcToCartStart, deletePcFromCartStart } from '../../store/actions';

import CartItem from '../../components/CartItem';

const CartItemContainer = props => <CartItem {...props} />;

const mapDispatchToProps = dispatch => ({
  setPcToCartStartAction: (pc) => dispatch(setPcToCartStart(pc)),
  deletePcFromCartStartAction: (pc)=> dispatch(deletePcFromCartStart(pc))
});

export default connect(null, mapDispatchToProps)(CartItemContainer);