import React, { FC } from 'react';
import { Accordeon } from '../components/Accordeon';

export const Price: FC = () => {
	const lashServices = [
		{name: 'Классический объем', price: '1300'},
		{name: '1,5D объем', price: '1500'},
		{name: '2D объем', price: '1600'},
		{name: '2,5 объем', price: '1700'},
		{name: '3D объем', price: '1800'},
		{name: '3,5D объем', price: '1950'},
		{name: '4D объем', price: '2100'},
		{name: 'Эффект "мокрых ресниц"', price: '1450'},
		{name: 'Лучики/эффект Ким/цветные ресницы', price: '+200'},
		{name: 'Снятие чужого наращивания', price: '200'},
		{name: 'Окрашивание ресниц хной или красителем', price: '600'},
		{name: 'Снятие моего наращивания с последующим наращиванием/ламинированием', price: 'Бесплатно'},
	];
	const browServices = [
		{name: 'Комплекс оформления бровей с хной или красителем', price: '700'},
		{name: 'Комплекс оформления бровей без окрашивания', price: '400'},
		{name: 'Долговременная укладка бровей', price: '1500'},
		{name: 'Ламинирование бровей(полный комплекс)', price: '1500'},
		{name: 'Мужское оформление без окрашивания', price: '450'},
		{name: 'Мужское оформление с тонированием', price: '750'},
	];
	const lamiServices = [
		{name: 'Ламинирование верхних ресниц', price: '1500'},
		{name: 'Ламинирование верхних ресниц + Lash Botox', price: '2000'},
		{name: 'Ламинирование нижних ресниц', price: '300'},
		{name: 'Lash Botox верхних и нижних ресниц', price: '600'},
	];
	const depilateServices = [
		{name: 'Зона над верхней губой', price: '200'},
		{name: 'Подбородок', price: '150'},
		{name: 'Ноздри', price: '150'},
		{name: 'Бакенбарды', price: '400'},
	];
	return (
		<div className="p-x-15 font-poiret">
			<Accordeon 
				title="Наращивание ресниц"
				services={lashServices}
			/>
			<Accordeon 
				title="Брови"
				services={browServices}
			/>
			<Accordeon 
				title="Ламинирование ресниц и бровей"
				services={lamiServices}
			/>
			<Accordeon 
				title="Депиляция воском"
				services={depilateServices}
			/>
		</div>
	);
};