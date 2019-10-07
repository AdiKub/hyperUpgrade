import React from 'react';

import './styles.scss';
import mainImages from '../../assets/images/gaming-pc-alt-3.jpg'

const Main = () => {

	return (
		<div className='main'>
			<div className='container'>
				<div className='main-wrapper'>
					<h1 className='main__title'>
						Игровые компьютеры и системные блоки
					</h1>
					<div className='main-image-wrapper'>
						<img
							src={mainImages}
							alt="PC"
							className='main__image' />
						<div className='main-text-wrapper'>
							<span className='main__text'>
								Когда в одном системном блоке объединяются все самые мощные технологии, присущие центральным и графическим процессорам, это и есть энергия компьютеров HYPERUPGRADE
							</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Main