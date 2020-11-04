import React, { useState } from 'react';
import Filters from '../components/Filters/Filters';
import Characters from '../components/Characters/Characters';
import PaginationBlock from '../components/Pagination/PaginationBlock';

const MainPage = ({ state }) => {
	let { isLoaded } = state;
	let [searchValue, setSearchValue] = useState('');

	const filterByName = ({ target: { value } }) => {
		setSearchValue(value);
	};

	return isLoaded ? (
		<>
			<Filters filterByName={filterByName} />
			<Characters state={state} searchValue={searchValue} />
			<PaginationBlock state={state} />
		</>
	) : (
		<div>Loading...</div>
	);
};

export default MainPage;
