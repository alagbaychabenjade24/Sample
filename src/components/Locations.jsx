import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Location.scss';

import Philippines from '../dist/img/side/philippines.jpg';
import Malaysia from '../dist/img/side/malaysia.jpg';

const Locations = () => {
	const refreshComponent = () => window.location.reload();

	return (
		<div className='minmax'>
			<aside className='hr__nav'>
				<span onClick={refreshComponent}>Locations</span>
			</aside>

			<div className='applicants__space__cards'>
				<Link to='applicants-space/philippines' className='card'>
					<div className='card__img'>
						<img src={Philippines} alt='philippines' />
					</div>

					<div className='card__country'>
						<h3>Philippines</h3>
					</div>
				</Link>

				<Link to='applicants-space/malaysia' className='card'>
					<div className='card__img'>
						<img src={Malaysia} alt='malaysia' />
					</div>

					<div className='card__country'>
						<h3>Malaysia</h3>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Locations;
