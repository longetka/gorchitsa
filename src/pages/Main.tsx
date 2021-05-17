import React, { FC } from 'react';
import { ButtonSubscribe } from '../components/ButtonSubscribe';

interface IMainProps {
	src: string;
	alt: string;
	heroTitle: string;
	heroDescription: string;
	heroFeatures: string[];
}

export const Main: FC<IMainProps> = ({
		src, alt, heroTitle, heroDescription, heroFeatures
	}) => {
	return (
		<div>
			<div className="flex flex-j-c-c m-t-20">
				<img className="hero-image" src={src} alt={alt} />
			</div>
			<div 
				className="
					p-x-30
					text-center
					font-poiret
					flex
					flex-a-i-c
					flex-d-column	
				"
			>
				<p className="hero-title">{heroTitle}</p>
				<p>{heroDescription}</p>
				<p>Делаю:</p>
				<ul>
					{heroFeatures.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
			</div>
			<ButtonSubscribe url="/contacts" />
		</div>
	);
};