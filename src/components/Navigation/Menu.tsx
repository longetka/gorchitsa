import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const menuToggle = () => {
		setIsOpen(!isOpen)
	}
	const menuClosed = () => {
		setIsOpen(false);
	}

	return (
			<div className="menu">
				<div className="menu-button" onClick={menuToggle}>
					МЕНЮ
				</div>
				{isOpen
					? 	<div className="menu-items-list visible">
							<Link to="/" className="menu-item" onClick={menuClosed}>ГЛАВНАЯ</Link>
							<Link to="/price" className="menu-item" onClick={menuClosed}>ПРАЙС</Link>
							<Link to="/gallery" className="menu-item" onClick={menuClosed}>ГАЛЕРЕЯ</Link>
							<Link to="/contacts" className="menu-item" onClick={menuClosed}>КОНТАКТЫ</Link>
						</div>
					: 	<div className="menu-items-list"></div>
				}
			</div>
	);
};