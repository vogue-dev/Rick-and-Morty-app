import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Filters from '../components/Filters/Filters';
import Characters from '../components/Characters/Characters';
import PaginationBlock from '../components/Pagination/PaginationBlock';
import Loader from '../components/Loader/Loader';

const MainPage = () => {
	let state = useSelector(({ state }) => state);
	let [searchValue, setSearchValue] = useState('');
	let { isLoaded } = state;

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
		<Loader />
	);
};

export default MainPage;
