import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filters from '../components/Filters/Filters';
import Characters from '../components/Characters/Characters';
import PaginationBlock from '../components/Pagination/PaginationBlock';
import Loader from '../components/Loader/Loader';

import { fetchingData } from '../redux/actions/fetching';

const MainPage = () => {
	const dispatch = useDispatch();
	let state = useSelector(({ state }) => state);
	let [searchValue, setSearchValue] = useState('');
	let { isLoaded } = state;

	const filterByName = ({ target: { value } }) => {
		setSearchValue(value);
	};

	useEffect(() => {
		dispatch(fetchingData());
	}, [dispatch]);

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
