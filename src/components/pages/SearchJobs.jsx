import React from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet';

import Footer from '../Footer';
import FindTalentMY from '../SearchJobsMY';
import FindTalentPH from '../SearchJobsPH';
import SearchJobsDataMY from '../../container/SearchJobsDataMY';
import SearchJobsDataPH from '../../container/SearchJobsDataPH';

import '../../dist/styles/SearchJobs.scss';

function SearchJobs() {
	return (
		<section className='findtalent'>
			<Helmet>
				<title>
					Search Jobs - BSA Solutions Inc - A Holistic Outsourcing Solution
				</title>
			</Helmet>

			<div className='findtalent__container'>
				<div className='findtalent__bg'>
					<div className='minmax'>
						<div className='findtalent__head'>
							<h1>Discovering World's Best and Brightest Talents</h1>
							<h2>
								<span>We're more than just a workplace.</span> <br />
								<span>We're a family.</span>
							</h2>

							<p>
								We know that finding a meaningful and rewarding job can
								be a long journey. Our goal is to make that process as
								easy as possible for you. We create a work environment
								that's satisfying, one where you'll look forward to
								coming to every day. A place where the best and
								brightest minds meet to build a community of successful
								companies. Start your journey with us by browsing
								available jobs in the Philippines and Malaysia.
							</p>

							<Link
								type='button'
								to='listing'
								smooth={true}
								duration={1000}
							>
								View Openings
							</Link>
						</div>
					</div>
				</div>

				<div className='minmax'>
					<div className='findtalent__body' id='listing'>
						<div className='findtalent__body__title'>
							<h2>JOIN US</h2>
						</div>

						<div className='findtalent__body__subtitle'>
							<h3>Current Openings</h3>
						</div>

						<div className='findtalent__body__browse__filter'>
							<div className='hr'></div>

							<FindTalentMY count={SearchJobsDataMY} />

							<FindTalentPH count={SearchJobsDataPH} />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	);
}

export default SearchJobs;
