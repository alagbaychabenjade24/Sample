import React from 'react';
import SeachJobsDataMY from '../container/SearchJobsDataMY';

function SearchJobsMY({ count }) {
	const openCount = count.length;

	return (
		<>
			<div className='location'>
				<h1>Malaysia</h1>
				<p>{openCount} JOBS</p>
			</div>

			<div className='filter__grid'>
				{SeachJobsDataMY.map(data => (
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

export default SearchJobsMY;
