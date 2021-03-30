import React from 'react';
import ReactPlayer from 'react-player';

import '../../dist/styles/AboutUs.scss';

import BSABrochure from '../../dist/vid/BSA Brochure V3 002.mp4';

function AboutUs() {
	return (
		<section className='aboutus'>
			<div className='aboutus__container'>
				<div className='aboutus__header'>
					<div className='aboutus__overlay'></div>

					<div className='minmax'>
						<div className='header__content'>
							<div className='content__text'>
								<h1>Lorem ipsum dolor sit amet consectetur.</h1>

								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing
									elit. Hic nam quis nobis dolor non cum tenetur
									doloremque qui excepturi provident.
								</p>

								<button>Sample Text</button>
							</div>

							<ReactPlayer
								url={BSABrochure}
								className='content__vid'
								playing={true}
								loop={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
