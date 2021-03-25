import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Footer.scss';

import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='footer'>
			<div className='minmax'>
				<div className='footer__container'>
					<div className='footer__top'>
						<ul className='important__links'>
							<li>
								<Link to='/'>Privacy Policy</Link>
							</li>

							<li>
								<Link to='/'>Terms & Conditions</Link>
							</li>

							<li>
								<Link to='/'>Contact Us</Link>
							</li>
						</ul>

						<ul className='social__links'>
							<li>
								<a
									href='https://www.facebook.com/bsasolutionsinc/'
									target='_blank'
									rel='noreferrer'
								>
									<FaFacebookSquare />
								</a>
							</li>

							<li>
								<a
									href='https://www.linkedin.com/company/bsa-solutions-inc/mycompany/'
									target='_blank'
									rel='noreferrer'
								>
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>

					<div className='hr'></div>

					<div className='footer__btm'>
						<div className='copyrights'>
							<p>
								&copy; Copyright 2021 BSA Solutions Inc. All rights
								reserved. Various trademarks held by their respective
								owners.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
