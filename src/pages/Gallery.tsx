import React, { FC } from 'react';
import img1 from '../assets/images/gallery/DSC_7847.png';
import img2 from '../assets/images/gallery/DSC_7921.png';
import img3 from '../assets/images/gallery/DSC_7924.png';
import img4 from '../assets/images/gallery/DSC_7928.png';
import img5 from '../assets/images/gallery/DSC_7934.png';
import img6 from '../assets/images/gallery/DSC_7957.png';
import img7 from '../assets/images/gallery/DSC_8013.png';
import img8 from '../assets/images/gallery/DSC_8091.png';
import { ButtonSubscribe } from '../components/ButtonSubscribe';

export const Gallery: FC = () => {
	const img = [ img1, img2, img3, img4, img5, img6, img7, img8 ];
	const imagesRender = img.map((item, index) => {
		return (
			<div key={index} className="flex-d-inline">
				<img src={item} alt=""/>
			</div>
		);
	});
	return (
		<div>
			<div className="m-y-25 flex flex-d-column flex-a-i-c">
				{imagesRender}
			</div>
			<ButtonSubscribe url="/contacts"/>
		</div>

	);
};
