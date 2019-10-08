import React, { useState } from 'react';

import './styles.scss';

const Footer = () => {
	const [colorArray, setColor] = useState(['255,23,23,1', '55,255,71,1', '48,125,255,1', '255,40,254,1'])

	const firstToLast = () => {
		const arr2 = colorArray.splice(-1, 1)
		const ppd = arr2.concat(...colorArray)
		setColor(ppd)
	}
	setTimeout(() => firstToLast(), 1000)
	return (
		<div
			style={{
				background: `linear-gradient(90deg, rgba(${colorArray[0]}) 0%, rgba(${colorArray[1]}) 33%, rgba(${colorArray[2]}) 66%, rgba(${colorArray[3]}) 100%)`,
				transition: '1000ms',
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