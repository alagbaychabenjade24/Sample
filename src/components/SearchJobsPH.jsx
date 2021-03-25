import React from 'react';
import SearchJobsDataPH from '../container/SearchJobsDataPH';

function SearchJobsPH({ count }) {
	const openCount = count.length;

	return (
		<>
			<div className='location'>
				<h1>Philippines</h1>
				<p>{openCount} JOBS</p>
			</div>

			<div className='filter__grid  mb'>
				{SearchJobsDataPH.map(data => (
					<a href={data.link}>
						<div className='filter__fields'>
							<div className='field__pos'>
								<h3>{data.pos}</h3>
							</div>

							<div className='field__role'>
								<h2>{data.role}</h2>
							</div>

							<div className='field__location'>
								<p>{data.location}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	);
}

export default SearchJobsPH;
