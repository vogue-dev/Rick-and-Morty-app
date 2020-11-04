import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filters from '../components/Filters/Filters';
import CharactersList from '../components/CharactersList/CharactersList';
import PaginationBlock from '../components/Pagination/PaginationBlock';
import Loader from '../components/Loader/Loader';

import { fetchingData } from '../redux/actions/fetching';

const MainPage = () => {
	const dispatch = useDispatch();
	let state = useSelector(({ state }) => state);
	let [searchValue, setSearchValue] = useState('');
	let { isLoaded, currentPage } = state;

	const filterByName = ({ target: { value } }) => {
		setSearchValue(value);
	};

	useEffect(() => {
		dispatch(fetchingData(currentPage));
	}, [dispatch, currentPage]);

	return isLoaded ? (
		<>
			<Filters filterByName={filterByName} />
			<CharactersList state={state} searchValue={searchValue} />
			<PaginationBlock state={state} />
		</>
	) : (
		<Loader />
	);
};

export default MainPage;
