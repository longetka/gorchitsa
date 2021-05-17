import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IButtonProps {
	url: string;
}

export const ButtonSubscribe: FC<IButtonProps> = ({url}) => {
	return (
		<div className="flex flex-j-c-c">
			<Link 
				to={url} 
				className="hero-button text-d-n font-montserrat" 
			>
				ЗАПИСАТЬСЯ
			</Link>
		</div>
	);
};