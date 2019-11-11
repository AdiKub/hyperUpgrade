import React from 'react';
import { connect } from 'react-redux';

import DesignCanvas from '../../components/DesignCanvas';

const DesignCanvasContainer = props => <DesignCanvas {...props} />;

const mapStateToProps = store => ({
  file: store.jabric.mainImage,
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(DesignCanvasContainer);