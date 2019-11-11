import React from 'react';
import { connect } from 'react-redux';
import {  setMainImageStart } from '../../store/actions';

import DropZone from '../../components/DropZone';

const DropZoneContainer = props => <DropZone {...props} />;

const mapStateToProps = store => ({
  mainImage: store.jabricImage.mainImage,
});

const mapDispatchToProps = dispatch => ({
  setMainImageStartAction: (fileName) => dispatch(setMainImageStart(fileName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZoneContainer);