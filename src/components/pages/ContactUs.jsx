import React from 'react';

import '../../dist/styles/ContactUs.scss';

import StickyNav from '../StickyNavbar';
import Footer from '../Footer';

import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import CustomerSupport from '../../dist/img/icons/customer-support.png';
import TechnicalSupport from '../../dist/img/icons/technical-support.png';

const ContactUs = () => {
	return (
		<>
			<StickyNav />

			<section className='contactus'>
				<div className='minmax'>
					<div className='contactus__container'>
						<div className='contactus__head'>
							<h1 className='head__title'>Contact Us</h1>

							<p className='head__subtitle'>
								We take our commitment to our users seriously. <br />
								If you need out help with your user account, have
								questions <br />
								about how to use the platform or are experiencing
								technical <br />
								difficulties, please do not hesitate to contact us.
							</p>

							<div className='loc__contacts'>
								<div className='loc'>
									<div className='loc__comp'>
										<h3>BSA Solutions Inc.</h3>
									</div>

									<div className='loc__wrapper'>
										<div className='loc__field ph'>
											<h4>Philippines</h4>

											<address>
												6/F Ebloc 4 Cebu IT Park, <br /> Jose Del
												Mar St., <br />
												Apas Cebu City, 6000
											</address>
										</div>

										<div className='loc__field my'>
											<h4>Malaysia</h4>

											<address>
												6/F Ebloc 4 Cebu IT Park, <br /> Jose Del
												Mar St., <br />
												Apas Cebu City, 6000
											</address>
										</div>
									</div>
								</div>

								<div className='contacts'>
									<div className='phone'>
										<FaPhoneAlt />{' '}
										<a href='tel:+639177728478'>+63 917 772 8478</a>
									</div>

									<div className='mail'>
										<GrMail />{' '}
										<a href='mailto:mycfo@bsasolutions-inc.com'>
											mycfo@bsasolutions-inc.com
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className='contactus__sides'>
							<div className='sides__head'>
								<h1 className='head__title'>Contact Support</h1>

								<p className='head__subtitle'>
									We understand you may have questions that are not
									shown on the sections. <br />
									If you cannot find the answer to your questions,
									please feel free to contact support.
								</p>
							</div>

							<div className='sides__aside'>
								<aside className='row__field field__dark'>
									<div className='css'>
										<img
											src={CustomerSupport}
											alt='customer service support'
										/>
										<p>customer service support</p>
									</div>

									<div className='ts'>
										<img
											src={TechnicalSupport}
											alt='technical support'
										/>
										<p>technical support</p>
									</div>

									<div className='mail'>
										<p>pelase contact us at</p>
										<a href='mailto:'>
											support@bsasolutions-inc.com
										</a>{' '}
									</div>
								</aside>

								<aside className='row__field field__light'>
									<p>
										For questions about hiring or to schedule a BSA
										Solutions Inc. client demo,
									</p>

									<p>
										please contact us at{' '}
										<a href='mailto:'>sales@bsasolutions-inc.com</a>
									</p>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default ContactUs;
