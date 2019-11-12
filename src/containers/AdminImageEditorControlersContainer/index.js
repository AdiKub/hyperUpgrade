import React from 'react';
import { connect } from 'react-redux';

import AdminImageEditorControlers from '../../components/AdminImageEditorControlers';


const AdminImageEditorControlersContainer = props => <AdminImageEditorControlers {...props} />;

const mapStateToProps = store => ({
  file: store.jabric.mainImage,
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(AdminImageEditorControlersContainer);