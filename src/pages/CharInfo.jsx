import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchingData } from '../redux/actions/fetching';
import CharacterInfo from '../components/DetailedInfo/DetailedInfo.jsx';
import Loader from '../components/Loader/Loader';

const CharacterInfoPage = () => {
	const dispatch = useDispatch();
	const state = useSelector(({ state }) => state);
	const { charId } = useParams();
	const { isLoaded, data } = state;

	const charData = data.find((e) => e.id === Number(charId));

	useEffect(() => {
		dispatch(fetchingData(Math.ceil(charId / 20)));
	}, [dispatch]);

	return isLoaded ? <CharacterInfo data={charData} /> : <Loader />;
};

export default CharacterInfoPage;
