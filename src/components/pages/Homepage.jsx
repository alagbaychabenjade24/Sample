import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import StaticNavbar from '../StaticNavbar';

import '../../dist/styles/Homepage.scss';

function Homepage() {
	return (
		<>
			<StaticNavbar />

			<section className='homepage'>
				<Helmet>
					<title>
						Homepage - BSA Solutions Inc - A Holistic Outsourcing Solution
					</title>
				</Helmet>

				<div className='homepage__overlay'></div>

				<div className='minmax'>
					<div className='homepage__container'>
						<h1 className='homepage__title'>We are a community. </h1>

						<p className='homepage__subtitle'>
							We connect the best and the brightest to build a community
							of successful businesses.{' '}
						</p>

						<div className='homepage--btns'>
							<Link to='/services'>
								<button className='find__talent'>Find Talent</button>
							</Link>

							<Link to='/applicants-space'>
								<button className='search__jobs'>Search Jobs</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Homepage;
