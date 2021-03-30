import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Location.scss';

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
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/View_from_Grand_Hyatt_Manila_overlooking_Bonifacio_Global_City_and_Makati_skylines_at_sunset.jpg/700px-View_from_Grand_Hyatt_Manila_overlooking_Bonifacio_Global_City_and_Makati_skylines_at_sunset.jpg'
							alt=''
						/>
					</div>

					<div className='card__country'>
						<h3>Philippines</h3>
					</div>
				</Link>

				<Link to='applicants-space/malaysia' className='card'>
					<div className='card__img'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/View_from_Grand_Hyatt_Manila_overlooking_Bonifacio_Global_City_and_Makati_skylines_at_sunset.jpg/700px-View_from_Grand_Hyatt_Manila_overlooking_Bonifacio_Global_City_and_Makati_skylines_at_sunset.jpg'
							alt=''
						/>
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
