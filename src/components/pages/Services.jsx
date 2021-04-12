import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';

import Footer from '../Footer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../dist/styles/Services.scss';

import TestimonialVideo from '../../dist/vid/Danielle-Cornelissen-01.mp4';

import QoutationMark from '../../dist/img/icons/quotation-mark.png';
import StickyNavbar from '../StickyNavbar';
import { Helmet } from 'react-helmet';

import OneWorldConsulting from '../../dist/img/icons/one-world-consulting.png';

function Services() {
	const vidShadow = {
		boxShadow:
			'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
	};

	return (
		<>
			<StickyNavbar />

			<section className='services'>
				<Helmet>
					<title>
						Services - BSA Solutions Inc - A Holistic Outsourcing Solution
					</title>
				</Helmet>

				<div className='services__container'>
					<div className='services__main'>
						<div className='minmax'>
							<div className='services__main__content'>
								<h1>
									We meet you where you are, <br />
									and ask you where to next?
								</h1>
							</div>
						</div>
					</div>

					<div className='minmax'>
						<div className='services__options'>
							<div className='option'>
								<div className='option__title'>
									<h2>Smart Build</h2>
								</div>

								<div className='option__subtitle'>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Iure nulla nesciunt nisi sunt, cupiditate
										et.
									</p>
								</div>

								<div className='option--btn'>
									<button type='button'>Get A Quote</button>
								</div>

								<hr />

								<div className='option__perks'>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</div>
							</div>

							<div className='option'>
								<div className='option__title'>
									<h2>Smart Scale</h2>
								</div>

								<div className='option__subtitle'>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Iure nulla nesciunt nisi sunt, cupiditate
										et.
									</p>
								</div>

								<div className='option--btn'>
									<button type='button'>Get A Quote</button>
								</div>

								<hr />

								<div className='option__perks'>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</div>
							</div>

							<div className='option'>
								<div className='option__title'>
									<h2>Smart Accelerate</h2>
								</div>

								<div className='option__subtitle'>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Iure nulla nesciunt nisi sunt, cupiditate
										et.
									</p>
								</div>

								<div className='option--btn'>
									<button type='button'>Get A Quote</button>
								</div>

								<hr />

								<div className='option__perks'>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</div>
							</div>
						</div>
					</div>

					<div className='minmax'>
						<div className='services__slides'>
							<Carousel
								showThumbs={false}
								showStatus={false}
								autoPlay={true}
								infiniteLoop
							>
								<div className='services__slide'>
									<div className='slide__title'>
										<h2>Shared Services</h2>
									</div>

									<div className='slide__subtitle'>
										<p>
											Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit. Aenean commodo ligula eget
											dolor. Aenean massa. Cum sociis natoque
											penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec qu
										</p>
									</div>
								</div>

								<div className='services__slide'>
									<div className='slide__title'>
										<h2>Managed Operations</h2>
									</div>

									<div className='slide__subtitle'>
										<p>
											Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit. Aenean commodo ligula eget
											dolor. Aenean massa. Cum sociis natoque
											penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec qu
										</p>
									</div>
								</div>

								<div className='services__slide'>
									<div className='slide__title'>
										<h2>Business Advisory</h2>
									</div>

									<div className='slide__subtitle'>
										<p>
											Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit. Aenean commodo ligula eget
											dolor. Aenean massa. Cum sociis natoque
											penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec qu
										</p>
									</div>
								</div>
							</Carousel>
						</div>
					</div>

					<div className='quote__card'>
						<div className='services__testimonial'>
							<div className='testimonial__video'>
								<ReactPlayer
									url={TestimonialVideo}
									controls
									width='100%'
									height='100%'
									style={vidShadow}
								/>
							</div>

							<div className='testimonial__quote'>
								<div className='quote__author'>
									<h1>Danielle Cornelissen</h1>
								</div>

								<div className='quote__text'>
									<p>
										"Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Est consequatur id, autem
										distinctio accusamus aut.
									</p>
								</div>

								<div className='quote__position'>
									<h2>Founder + CEO</h2>
								</div>

								<div className='quote__mark'>
									<img src={QoutationMark} alt='quotation mark' />
								</div>
							</div>
						</div>
					</div>

					{/* <div className='minmax'>
						<div className='clients'>
							<div className='clients__logo'></div>

							<div className='clients__intro'>
								<div className='intro__title'>
									<p>Our clients</p>
								</div>

								<div className='intro__subtitle'>
									<p>Companies that trust BSA Solutions Inc.</p>
								</div>
							</div>
						</div>
					</div> */}

					<div className='minmax'>
						<div className='clients__slide'>
							<div className='slide__track'>
								<div className='slide'>
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />

									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />

									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
									<img src={OneWorldConsulting} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Services;
