import React, { FC, MouseEvent } from 'react';
import arrow from '../assets/icons/arrow-navigate.svg';

interface IAccordeonProps {
	title: string;
	services: {name: string, price: string}[];
}

export const Accordeon: FC<IAccordeonProps> = (
	{title, services}
	) => {
	const servicesRender = services.map( (item, index) => {
		return (
			<div key={index} className="services p-y-5">
				<div className="services-name">
					{item.name}
				</div>
				<div className="services-price">
					{item.price}₽
				</div>
			</div>
		);
	});
	const handleOpen = (event: MouseEvent) => {
		event.currentTarget.classList.toggle('accordeon-button--visible');
		event.currentTarget.nextElementSibling?.classList.toggle('accordeon-item--visible')
		// console.log(event.currentTarget.nextElementSibling?.classList)
		// document.querySelector('.accordeon-button')?.classList
		// 	.toggle('accordeon-button--visible');
		// document.querySelector('.accordeon-item')?.classList
		// 	.toggle('accordeon-item--visible');
	}
	return (
		<div className="accordeon m-t-25">
			<div 
				className="accordeon-button flex flex-j-c-sb flex-a-i-c"
				onClick={handleOpen}	
			>
				{title}
				<img src={arrow} alt="arrow" />
			</div>
			<div className="accordeon-item">
				{servicesRender}
			</div>
		</div>
	);
};