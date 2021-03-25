import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import disableScroll from 'disable-scroll';
import Footer from '../Footer';

import '../../dist/styles/Services.scss';

import GetOne from '../../dist/img/icons/get_1-min.png';
import GetTwo from '../../dist/img/icons/get_2-min.png';
import GetThree from '../../dist/img/icons/get_3-min.png';
import GetFour from '../../dist/img/icons/get_4-min.png';
import PlansImg from '../../dist/img/side/plans-img.png';
import { AiOutlineClose } from 'react-icons/ai';
// import { FaPython } from 'react-icons/fa';

function Services() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	const [click, setClick] = useState(false);

	const clickQoute = () => {
		setClick(!false);
		window.scrollTo({
			top: 0
		});
		disableScroll.on();
	};

	const clickCloseQoute = () => {
		setClick(false);
		disableScroll.off();
	};

	return (
		<section className='services'>
			<Helmet>
				<title>
					Services - BSA Solutions Inc - A Holistic Outsourcing Solution
				</title>
			</Helmet>

			<div className='minmax'>
				<div className='services__container'>
					<div className='services__header'>
						<h1 className='header__title'>
							Lorem ipsum dolor sit amet consectetur. Suscipit, ea!
						</h1>

						<p className='header__subtitle'>
							Lorem ipsum dolor sit amet.
						</p>

						<Link
							to='services__opts'
							smooth={true}
							duration={1000}
							className='header--btn'
						>
							Get Started Now
						</Link>
					</div>

					<div className='services__opts' id='services__opts'>
						<div className='opt' data-aos='fade-up'>
							<h2 className='opt__title'>Smart Build</h2>

							<p className='opt__subtitle'>
								One time fixed cost. No hourly rate. Unlimited time.
								Price varies subject to scope and timeframe.
							</p>

							<button
								type='button'
								className='opt--btn'
								onClick={clickQoute}
							>
								Get a Qoute
							</button>

							<aside className='divider'></aside>

							<ul className='opt__perks'>
								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>

								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>
							</ul>
						</div>

						<div className='opt' data-aos='fade-up'>
							<h2 className='opt__title'>Smart Scale</h2>

							<p className='opt__subtitle'>
								Monthly subscription fee. No hourly rate. Unlimited
								time. Price varies subject to scope and timeframe.
							</p>

							<button
								type='button'
								className='opt--btn opt--btn__two'
								onClick={clickQoute}
							>
								Get a Qoute
							</button>

							<aside className='divider'></aside>

							<ul className='opt__perks'>
								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>

								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>
							</ul>
						</div>

						<div className='opt' data-aos='fade-up'>
							<h2 className='opt__title'>Smart Accelerate</h2>

							<p className='opt__subtitle'>
								Fixed fee per project. No hourly rate. Unlimited time.
								Price varies subject to scope and timeframe.
							</p>

							<button
								type='button'
								className='opt--btn'
								onClick={clickQoute}
							>
								Get a Qoute
							</button>

							<aside className='divider'></aside>

							<ul className='opt__perks'>
								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>

								<div className='row'>
									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>

									<li>
										<img
											src='https://saleslayer.com/assets/images/check.png'
											alt=''
										/>
										<p>Lorem, ipsum dolor.</p>
									</li>
								</div>
							</ul>
						</div>
					</div>

					<aside
						className={
							click
								? 'getAQoute getAQoute__active disableScroll'
								: 'getAQoute'
						}
					>
						<div
							className='getAQoute__overflow'
							onClick={clickCloseQoute}
						></div>

						<div className='getAQoute__container'>
							<div className='getAQoute__close'>
								<AiOutlineClose onClick={clickCloseQoute} />
							</div>

							<div className='getAQoute__title'>
								<h1>Get a qoute</h1>
							</div>

							<div className='getAQoute__form'>
								<form>
									<div className='row__field'>
										<label htmlFor='first_name'></label>
										<input
											type='text'
											id='first_name'
											name='first_name'
											placeholder='First Name'
										/>
									</div>

									<div className='row__field'>
										<label htmlFor='surname'></label>
										<input
											type='text'
											id='surname'
											name='surname'
											placeholder='Surname'
										/>
									</div>

									<div className='row__field'>
										<label htmlFor='email'></label>
										<input
											type='email'
											id='email'
											name='email'
											placeholder='Email'
										/>
									</div>

									<div className='row__field'>
										<label htmlFor='company_name'></label>
										<input
											type='text'
											id='company__name'
											name='company_name'
											placeholder='Company Name'
										/>
									</div>

									<div className='row__field'>
										<input
											type='checkbox'
											name='accept'
											id='accept'
										/>
										<label htmlFor='accept'>
											Lorem, ipsum dolor.
										</label>
									</div>

									<div className='row__field'>
										<input
											type='submit'
											value='Request Information'
										/>
									</div>
								</form>
							</div>
						</div>
					</aside>

					<div className='services__plans'>
						<div className='plans__content'>
							<p className='content__what'>Plans</p>

							<h2 className='content__title'>
								Stretch your business with flexible pricing
							</h2>

							<p className='content__para content__first__para'>
								At BSA Solutions Inc, we want every business to be able
								to get the advantage of smarter Product Information
								Management. That's why our pricing is just as flexible
								as BSA Solutions Inc itself.
							</p>

							<p className='content__para content__sec__para'>
								If you already know what you need, speak to our team for
								a comprehensive quote.
							</p>
						</div>

						<div className='plans__img'>
							<img src={PlansImg} alt='plans img' />
						</div>
					</div>

					<aside className='services__get'>
						<h3 className='get__title'>
							Whichever package you choose, you'll get:
						</h3>

						<div className='get__grid'>
							<div className='get'>
								<img src={GetOne} alt='get one icon' />

								<h4>Lorem, ipsum dolor.</h4>
							</div>

							<div className='get'>
								<img src={GetTwo} alt='get two icon' />

								<h4>Lorem, ipsum dolor.</h4>
							</div>

							<div className='get'>
								<img src={GetThree} alt='get three icon' />

								<h4>Lorem, ipsum dolor.</h4>
							</div>

							<div className='get'>
								<img src={GetFour} alt='get four icon' />

								<h4>Lorem, ipsum dolor.</h4>
							</div>
						</div>
					</aside>
				</div>
			</div>

			<Footer />
		</section>
	);
}

export default Services;
