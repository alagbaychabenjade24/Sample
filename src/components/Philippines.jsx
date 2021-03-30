import React from 'react';
import { Link } from 'react-router-dom';

import '../dist/styles/Professions.scss';

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
						<img
							src='https://images.unsplash.com/photo-1520695082671-948f2937d752?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
							alt=''
						/>
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
							src='https://images.unsplash.com/photo-1520695082671-948f2937d752?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
							alt=''
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
						<img
							src='https://images.unsplash.com/photo-1520695082671-948f2937d752?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
							alt=''
						/>
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
