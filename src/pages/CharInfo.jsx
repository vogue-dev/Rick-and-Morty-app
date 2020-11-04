import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchingData } from '../redux/actions/fetching';
import DetailedInfo from '../components/DetailedInfo/DetailedInfo.jsx';
import Loader from '../components/Loader/Loader';

const CharacterInfoPage = () => {
	const dispatch = useDispatch();
	const state = useSelector(({ state }) => state);
	const { charId } = useParams();
	const { isLoaded, data } = state;

	useEffect(() => {
		dispatch(fetchingData(Math.ceil(charId / 20)));
	}, [dispatch, charId]);

	return isLoaded ? <DetailedInfo data={data} charId={charId} /> : <Loader />;
};

export default CharacterInfoPage;
