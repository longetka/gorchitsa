import React, { FC } from 'react';
import logo from '../../assets/images/logo.png';
import instagram from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';
import whatsapp from '../../assets/icons/whatsapp.png';

export const Footer: FC = () => {
	return (
		<footer className="m-t-20">
			<div className="flex flex-j-c-c flex-a-i-c">
				<img 
					className="footer-logo" 
					src={logo} 
					alt="Gorchitsa logo"
				/>
			</div>
			<div className="footer-social flex flex-j-c-sb p-y-15">
				<a 
					href="https://instagram.com/alena_aic?igshid=1az3r1mxzb80n"
				>
					<img src={instagram} alt="Instagram" />
				</a>
				<a href="https://t.me/alena_aic">
					<img src={telegram} alt="Telegram" />
				</a>
				<a href="https://wa.me/79627930161?text=Здравствуйте,20%хочу20%к20%Вам20%записаться">
					<img src={whatsapp} alt="Whatsapp" />
				</a>
			</div>
		</footer>
	);
};