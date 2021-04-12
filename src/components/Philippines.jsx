import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Professions.scss';

import FinanceAccounting from '../dist/img/side/finance-services.jpg';
import DigitalMarketingECommerce from '../dist/img/side/digital-marketing-e-commerce.jpeg';
import ProjectServices from '../dist/img/side/project-services.jpeg';

const Philippines = () => {
	const refreshComponent = () => window.location.reload();

	return (
		<aside className='minmax'>
			<aside className='hr__nav'>
				<Link to='/applicants-space'>Locations</Link>
				<span>
					<img
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVRIie3MMREAMAgAsaeHZzTguhI4BraPgIAkjQJIoI7+fkexJG184OUBCKzSeDUAAAAASUVORK5CYII='
						alt='horizontal divider'
					/>
				</span>
				<span onClick={refreshComponent}>Philippines</span>
			</aside>

			<div className='applicants__space__professions'>
				<Link
					to='/applicants-space/philippines/finance-and-accounting'
					className='card'
				>
					<div className='card__img'>
						<img src={FinanceAccounting} alt='Finance & Accounting' />
					</div>

					<div className='card__title'>
						<h3>Finance & Accounting</h3>
					</div>
				</Link>

				<Link
					to='/applicants-space/philippines/digital-marketing-and-e-commerce'
					className='card'
				>
					<div className='card__img'>
						<img
							src={DigitalMarketingECommerce}
							alt='Digital Marketing & E-commerce'
						/>
					</div>

					<div className='card__title'>
						<h3>Digital Marketing & E-commerce</h3>
					</div>
				</Link>

				<Link
					to='/applicants-space/philippines/project-services'
					className='card'
				>
					<div className='card__img'>
						<img src={ProjectServices} alt='Project Services' />
					</div>

					<div className='card__title'>
						<h3>Project Services</h3>
					</div>
				</Link>
			</div>
		</aside>
	);
};

export default Philippines;
