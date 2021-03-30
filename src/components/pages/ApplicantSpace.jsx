import React from 'react';
import { Helmet } from 'react-helmet';
import { Link as Scroll } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StickyNavbar from '../StickyNavbar';
import Footer from '../Footer';

import '../../dist/styles/ApplicantsSpace.scss';
import Philippines from '../Philippines';
import Locations from '../Locations';
import Malaysia from '../Malaysia';
import FA from '../FA';
import DMEc from '../DMEc';
import PS from '../PS';
import DMEcMY from '../DMEcMY';
import FAMY from '../FAMY';
import PSMY from '../PSMY';

function ApplicantSpace() {
	return (
		<>
			<StickyNavbar />

			<section className='applicants__space'>
				<Helmet>
					<title>
						Applicants Space - BSA Solutions Inc - A Holistic Outsourcing
						Solution
					</title>
				</Helmet>

				<div className='applicants__space__container'>
					<div className='applicants__space__home'>
						<div className='applicants__space__home__overlay'></div>

						<div className='minmax'>
							<div className='applicants__space__home__content'>
								<h1>Discovering World's Best and Brightest Talents</h1>
								<h2>
									<span>We're more than just a workplace.</span> <br />
									<span>We're a family.</span>
								</h2>

								<p>
									We know that finding a meaningful and rewarding job
									can be a long journey. Our goal is to make that
									process as easy as possible for you. We create a work
									environment that's satisfying, one where you'll look
									forward to coming to every day. A place where the
									best and brightest minds meet to build a community of
									successful companies. Start your journey with us by
									browsing available jobs in the Philippines and
									Malaysia.
								</p>

								<Scroll to='listing' smooth={true} duration={1000}>
									View Openings
								</Scroll>
							</div>
						</div>
					</div>

					<div className='minmax'>
						<div className='applicants__space__intro' id='listing'>
							<h2>JOIN US</h2>
						</div>
					</div>
				</div>
			</section>

			<Router>
				<Switch>
					<Route exact path='/applicants-space' component={Locations} />
					<Route
						exact
						path='/applicants-space/philippines'
						component={Philippines}
					/>
					<Route
						exact
						path='/applicants-space/malaysia'
						component={Malaysia}
					/>
					<Route
						exact
						path='/applicants-space/philippines/finance-and-accounting'
						component={FA}
					/>
					<Route
						exact
						path='/applicants-space/philippines/digital-marketing-and-e-commerce'
						component={DMEc}
					/>
					<Route
						exact
						path='/applicants-space/philippines/finance-and-accounting'
						component={FA}
					/>
					<Route
						exact
						path='/applicants-space/philippines/project-services'
						component={PS}
					/>
					<Route
						exact
						path='/applicants-space/malaysia/digital-marketing-and-e-commerce'
						component={DMEcMY}
					/>
					<Route
						exact
						path='/applicants-space/malaysia/finance-and-accounting'
						component={FAMY}
					/>
					<Route
						exact
						path='/applicants-space/malaysia/project-services'
						component={PSMY}
					/>
				</Switch>
			</Router>

			<Footer />
		</>
	);
}

export default ApplicantSpace;
