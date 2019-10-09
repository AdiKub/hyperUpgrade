import React, { useState } from 'react';

import { lastToFirst } from '../../services/helpers.js' 
import './styles.scss';

const Footer = () => {
	const [colorsArray, setColors] = useState(['255,23,23,1', '55,255,71,1', '48,125,255,1', '255,40,254,1'])

	setTimeout(() => setColors(lastToFirst(colorsArray)), 1000)

	return (
		<div
			style={{
				background: `linear-gradient(90deg, rgba(${colorsArray[0]}) 0%, rgba(${colorsArray[1]}) 33%, rgba(${colorsArray[2]}) 66%, rgba(${colorsArray[3]}) 100%)`,
			}}
			className='footer'>
			<div className='container'>
				<div className='footer-wrapper'>
					<h3>
						© 2019 HYPERPC LLC - Build and sale of powerful computers. All aspects of software are protected by copyright law.
					</h3>
					<span>
						HYPERPC and the HYPERPC logo are trademarks of HYPERPC LLC., registered in Russia and other countries.
					</span>
				</div>
			</div>
		</div>
	)
}
export default Footer