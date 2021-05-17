import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Menu: FC = () => {

	const menu = () => {
		document
			.querySelector('.menu-items-list')?.classList
			.toggle('visible')
		
	}

	return (
			<div className="menu">
				<div 
					className="menu-button"
					onClick={menu}
				>
					МЕНЮ
				</div>
					<div className="menu-items-list">
						<Link to="/" className="menu-item">ГЛАВНАЯ</Link>
						<Link to="/price" className="menu-item">ПРАЙС</Link>
						<Link to="/gallery" className="menu-item">ГАЛЕРЕЯ</Link>
						<Link to="/contacts" className="menu-item">КОНТАКТЫ</Link>
					</div>
			</div>
	);
};