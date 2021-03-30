import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Footer.scss';

import BSASolutionsIncLogo from '../dist/img/bsa-solutions-inc-logo.png';
import PhilippineFlag from '../dist/img/icons/philippine-flag.png';
import MalaysiaFlag from '../dist/img/icons/malaysia-flag.png';

import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker, HiOutlineMail } from 'react-icons/hi';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__top__container'>
					<div className='minmax'>
						<div className='footer__top'>
							<div className='top__left'>
								<Link to='/' className='left__company__name'>
									<img
										src={BSASolutionsIncLogo}
										alt='bsa solutions inc logo'
									/>

									<h1>BSA Solutions Inc.</h1>
								</Link>

								<p className='left__company__description'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing
									elit. Aenean commodo ligula eget dolor. Aenean massa.
									Cum sociis natoque penatibus et magnis dis p
								</p>

								<div className='left__company__social'>
									<a
										href='https://www.facebook.com/bsasolutionsinc/'
										target='_blank'
										rel='noreferrer'
									>
										<FaFacebookF className='facebook' />
									</a>

									<a
										href='https://www.linkedin.com/company/bsa-solutions-inc/mycompany/'
										target='_blank'
										rel='noreferrer'
									>
										<FaLinkedinIn className='linkedin' />
									</a>
								</div>
							</div>

							<div className='top__right'>
								<div className='right__ph'>
									<div className='ph__title'>
										<img src={PhilippineFlag} alt='philippine flag' />

										<h1>Philippines</h1>
									</div>

									<div className='location'>
										<div className='location___icn'>
											<HiLocationMarker />
										</div>

										<div className='location__maps'>
											<div className='location__maps'>
												<a
													href='https://goo.gl/maps/Z2WJcd99D7S6Mwyj9'
													target='_blank'
													rel='noreferrer'
												>
													{' '}
													6/F Ebloc 4 Cebu IT Park, Jose Del Mar
													St., Apas Cebu City, 6000
												</a>
											</div>
										</div>
									</div>

									<div className='phone'>
										<FaPhoneAlt />

										<a href='tel:+639177728478'>+63 917 772 8478</a>
									</div>

									<div className='email'>
										<HiOutlineMail />

										<a href='mailto:mycfo@bsasolutions-inc.com'>
											mycfo@bsasolutions-inc.com
										</a>
									</div>
								</div>

								<div className='right__my'>
									<div className='my__title'>
										<img src={MalaysiaFlag} alt='malaysian flag' />

										<h1>Malaysia</h1>
									</div>

									<div className='location'>
										<div className='location___icn'>
											<HiLocationMarker />
										</div>

										<div className='location__maps'>
											<a
												href='https://goo.gl/maps/Z2WJcd99D7S6Mwyj9'
												target='_blank'
												rel='noreferrer'
											>
												{' '}
												6/F Ebloc 4 Cebu IT Park, Jose Del Mar St.,
												Apas Cebu City, 6000
											</a>
										</div>
									</div>

									<div className='phone'>
										<FaPhoneAlt />

										<a href='tel:+60123784784'>+60 123 784 784</a>
									</div>

									<div className='email'>
										<HiOutlineMail />

										<a href='mailto:mycfo@bsasolutions-inc.com'>
											mycfo@bsasolutions-inc.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='footer__btm__container'>
					<div className='minmax'>
						<div className='footer__btm'>
							<p>
								&copy; Copyright 2021 BSA Solutions Inc. &bull;{' '}
								<Link to='/privacy-policy'>Privacy Policy</Link>
								<span className='pipe'>|</span>
								<Link to='/terms-and-conditions'>
									Terms and Conditions
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
