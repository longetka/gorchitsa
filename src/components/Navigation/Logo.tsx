import React, {FC} from 'react';

interface ILogoProps {
	src: string;
	alt: string;
}

export const Logo: FC<ILogoProps> = ({src, alt}) => {
	return (
		<>
			<img src={src} alt={alt} className="logo"/>
		</>
	);
};
// client/src/components/Navigation/logo.png