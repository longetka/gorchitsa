import React, { FC } from 'react';
import insta from '../assets/icons/instagram.png';
import whatsapp from '../assets/icons/whatsapp.png';
import telegram from '../assets/icons/telegram.png';

export const Contacts: FC = () => {
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