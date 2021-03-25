import React from 'react';
import { Link } from 'react-router-dom';

import '../../dist/styles/Homepage.scss';

function Homepage() {
	return (
		<section className='homepage'>
			<div className='homepage__overlay'></div>

			<div className='minmax'>
				<div className='homepage__container'>
					<h1 className='homepage__title'>We are a community. </h1>

					<p className='homepage__subtitle'>
						We connect the best and the brightest to build a community of
						successful businesses.{' '}
					</p>

					<div className='homepage--btns'>
						<Link to='find-talent'>
							<button className='find__talent'>Find Talent</button>
						</Link>

						<Link to='/applicant-space'>
							<button className='search__jobs'>Search Jobs</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Homepage;
