import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Navbar.scss';

import { AiOutlineClose } from 'react-icons/ai';
import { VscMenu } from 'react-icons/vsc';

import BSASolutionsIncLogo from '../dist/img/bsa-solutions-inc-logo.png';

function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const [hide, setHide] = useState(false);

	const showNav = () => {
		setNavbar(!false);
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const closeNav = () => {
		setNavbar(false);
	};

	const clickedIcon = () => setHide(!false);
	const DClickedIcon = () => setHide(false);

	return (
		<nav className='navbar'>
			<div className='minmax'>
				<div className='navbar__container'>
					<Link to='/' className='navbar__logo'>
						<img src={BSASolutionsIncLogo} alt='' />
					</Link>

					<ul
						className={
							navbar
								? 'navbar__links navbar__links__active'
								: 'navbar__links'
						}
					>
						<li
							onClick={() => {
								closeNav();
								DClickedIcon();
							}}
						>
							<Link to='/about-us'>About Us</Link>
						</li>

						<li
							onClick={() => {
								closeNav();
								DClickedIcon();
							}}
						>
							<Link to='/services'>Services</Link>
						</li>

						<li
							onClick={() => {
								closeNav();
								DClickedIcon();
							}}
						>
							<Link to='/applicant-space'>Applicant Space</Link>
						</li>

						<li
							onClick={() => {
								closeNav();
								DClickedIcon();
							}}
						>
							<Link to='/contact-us'>Contact Us</Link>
						</li>
					</ul>

					<VscMenu
						className={hide ? 'menu__bar__close' : 'menu__bar '}
						onClick={() => {
							showNav();
							clickedIcon();
							window.scrollTo({
								top: 0,
								behavior: 'smooth'
							});
						}}
					/>
					<AiOutlineClose
						className={hide ? 'close close__active' : 'close'}
						onClick={() => {
							closeNav();
							DClickedIcon();
							window.scrollTo({
								top: 0,
								behavior: 'smooth'
							});
						}}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
