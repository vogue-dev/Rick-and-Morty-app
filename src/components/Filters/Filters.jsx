import React from 'react';

import './filters.scss';

const Fitlers = ({ filterByName }) => {
	return (
		<div className="filters">
			Search by Name
			<input placeholder="Search..." onChange={filterByName} />
		</div>
	);
};

export default Fitlers;
