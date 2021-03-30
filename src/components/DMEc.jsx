import React from 'react';
import DMEcDatas from '../container/DMEcData';

import '../dist/styles/Data.scss';

import { HiLocationMarker } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import PhilippinePeso from '../dist/img/icons/philippine-peso.png';
import { Link } from 'react-router-dom';

const DMEc = () => {
	const refreshComponent = () => window.location.reload();

	return (
		<section className='fa'>
			<div className='minmax'>
				<aside className='hr__nav'>
					<Link to='/applicants-space'>Locations</Link>

					<span>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVRIie3MMREAMAgAsaeHZzTguhI4BraPgIAkjQJIoI7+fkexJG184OUBCKzSeDUAAAAASUVORK5CYII='
							alt='line'
						/>
					</span>

					<Link exact to='/applicants-space/malaysia'>
						Malaysia
					</Link>

					<span>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVRIie3MMREAMAgAsaeHZzTguhI4BraPgIAkjQJIoI7+fkexJG184OUBCKzSeDUAAAAASUVORK5CYII='
							alt='line'
						/>
					</span>

					<span onClick={refreshComponent}>
						Digital Marketing & E-commerce
					</span>
				</aside>
				<div className='fa__container'>
					{DMEcDatas.map(data => (
						<div className='data'>
							<div className='data__img'>
								<img src={data.imageUrl} alt={data.role} />
							</div>

							<div className='data__details'>
								<h2 className='details__role'>{data.role}</h2>

								<h3 className='details__salary'>
									<img src={PhilippinePeso} alt='philippine peso' />{' '}
									{data.salary} per month
								</h3>

								<p className='details__location'>
									<HiLocationMarker /> {data.location}
								</p>

								<p className='details__pos'>
									<BiTimeFive /> {data.pos}
								</p>
							</div>

							<div className='data--btns'>
								<a href={data.details} className='btn--details'>
									DETAILS
								</a>

								<a href={data.apply} className='btn--apply'>
									APPLY NOW
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DMEc;
