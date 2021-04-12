import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../../dist/styles/AboutUs.scss';
import StickyNavbar from '../StickyNavbar';

import Team from '../Team';

function AboutUs() {
	return (
		<>
			<StickyNavbar />

			<section className='aboutus'>
				<Helmet>
					<title>
						About Us - BSA Solutions Inc - A Holistic Outsourcing Solution
					</title>
				</Helmet>

				<div className='aboutus__container'>
					<div className='aboutus__header'>
						<div className='minmax'>
							<div className='header__content'>
								<h1>Lorem ipsum dolor sit.</h1>

								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing
									elit. Quia cupiditate nobis ratione illum? Cupiditate
									minus commodi ducimus quam doloremque qui.
								</p>
							</div>

							<div className='header--btns'>
								<Scroll to='team' smooth={true} duration={1000}>
									Meet our Team
								</Scroll>

								<Link to='/applicants-space'>Applicants Space</Link>

								<Link to='/contact-us'>Contact Us</Link>
							</div>
						</div>
					</div>

					<Team />
				</div>
			</section>
		</>
	);
}

export default AboutUs;
