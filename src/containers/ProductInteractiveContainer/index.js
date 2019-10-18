import React from 'react';
import { connect } from 'react-redux';
import { setPcToCartStart  } from '../../store/actions';

import ProductInteractive from '../../components/ProductInteractive';

const ProductInteractiveContainer = props => <ProductInteractive {...props} />;

// const mapStateToProps = store => ({
//   cart: store.cart,
// });

const mapDispatchToProps = dispatch => ({
  setPcToCartStartAction: (pc = {}) => dispatch(setPcToCartStart(pc)),
});

export default connect(null, mapDispatchToProps)(ProductInteractiveContainer);