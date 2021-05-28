import React, { FC, useEffect } from 'react';
import insta from '../assets/icons/instagram.png';
import whatsapp from '../assets/icons/whatsapp.png';
import telegram from '../assets/icons/telegram.png';
import DG from '../apis/2gis.api';

export const Contacts: FC = () => {
	useEffect(() => {
		let map;
		let coordinates = [52.5370802,85.2206601];
		DG.then(function() {
			map = DG.map('map', {
				center: coordinates,
				zoom: 17
			});
			DG
				.marker(coordinates)
				.addTo(map)
				.bindPopup('ул. Советская, 27/3, ТЦ Бута, вход через SPA бутон')
		});
		
	},[]);
	const social = [
		{
			name: 'Instagram',
			img: insta,
			text: 'alena_aic',
			url: "https://instagram.com/alena_aic?igshid=1az3r1mxzb80n"
		},
		{
			name: 'WhatsApp',
			img: whatsapp,
			text: '+7(962)793-01-61',
			url: "https://wa.me/79627930161?text=Здравствуйте,%20хочу%20к%20Вам%20записаться"
		},
		{
			name: 'Telegram',
			img: telegram,
			text: '@alena_aic',
			url: "https://t.me/alena_aic"
		}
	];
	
	const socialRender = social.map((item, index) => {
		return (
			<div key={index} className="contacts-social m-y-20">
				<a 
					href={item.url}
					className="flex flex-a-i-c"
				>
					<img src={item.img} alt={item.name}/>
					<div className="font-poiret p-l-20">{item.text}</div>
				</a>
			</div>
		)
	})
	return (
		<div className="p-x-30">
			{socialRender}
			<div id="map">

			</div>
		</div>
	);
};