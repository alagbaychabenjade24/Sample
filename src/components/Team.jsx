import React, { useEffect } from 'react';
import Aos from 'aos';
import ReactPlayer from 'react-player';

import '../dist/styles/Team.scss';
import 'aos/dist/aos.css';

import { FaLinkedinIn } from 'react-icons/fa';

import Samp from '../dist/vid/BSA Brochure V3 002.mp4';

const Team = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<div className='minmax' id='team'>
			<div className='team'>
				<div className='team__border'>
					<h2>
						<span>Our team is eager to meet you.</span> <br />
						<span>Conenct with us.</span>
					</h2>
				</div>

				<div className='team__grid'>
					<div className='row' data-aos='fade-up'>
						<div className='description'>
							<h2 className='name'>NAME HERE</h2>

							<div className='position__social-media'>
								<h3>POSITION</h3>

								<a href='/'>
									<FaLinkedinIn />
								</a>
							</div>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati voluptatibus tempora illum eligendi. Odit
								perferendis atque alias expedita praesentium, dolorem
								laboriosam omnis perspiciatis saepe facilis minus, velit
								doloremque soluta! Explicabo repellendus quis facilis
								officia provident error tempore nisi. Sapiente tempora
								ratione quaerat veniam at in odit quibusdam placeat
								consectetur repellat?
							</p>
						</div>

						<div className='player'>
							<ReactPlayer url={Samp} width='100%' height='100%' />
						</div>
					</div>

					<div className='row__reverse' data-aos='fade-up'>
						<div className='player'>
							<ReactPlayer url={Samp} width='100%' height='100%' />
						</div>

						<div className='description'>
							<h2 className='name'>NAME HERE</h2>

							<div className='position__social-media'>
								<h3>POSITION</h3>

								<a href='/'>
									<FaLinkedinIn />
								</a>
							</div>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati voluptatibus tempora illum eligendi. Odit
								perferendis atque alias expedita praesentium, dolorem
								laboriosam omnis perspiciatis saepe facilis minus, velit
								doloremque soluta! Explicabo repellendus quis facilis
								officia provident error tempore nisi. Sapiente tempora
								ratione quaerat veniam at in odit quibusdam placeat
								consectetur repellat?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
