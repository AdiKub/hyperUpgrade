import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getPcDetailStart } from '../../store/actions';

import Footer from '../../components/Footer';
import HeaderContainer from '../../containers/HeaderContainer';
import ProductDetailDescription from '../../components/ProductDetailDescription';
import ProductSpecification from '../../components/ProductSpecification';

import '../../assets/styles/main.scss';

const ProductsDetail = (props) => {
  const { getPcDetailStartAction, selectedPc } = props;
  const pcId = localStorage.getItem('selectedPC');
  const category = localStorage.getItem('pcCategory');
  
	useEffect(()=>{
    getPcDetailStartAction(`${category}?_id=${pcId}`)
	},[]);
	
	return (
		<Fragment>
			<HeaderContainer />
			<ProductDetailDescription selectedPc={selectedPc} />
			<ProductSpecification selectedPc={selectedPc}/>
			<Footer />
		</Fragment>
	)
};

const mapStateToProps = store => ({
  selectedPc: store.pcDetail.selectedPc,
});

const mapDispatchToProps = dispatch => ({
	getPcDetailStartAction: requestParams => dispatch(getPcDetailStart(requestParams)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsDetail));
