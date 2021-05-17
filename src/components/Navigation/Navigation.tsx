import React, { FC } from 'react';

interface INavigationProps {

}

export const Navigation: FC<INavigationProps> = ({children}) => {

	return (
		<nav className="nav">
			{children}
		</nav>
	);
};