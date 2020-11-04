import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CharacterInfo from '../components/DetailedInfo/DetailedInfo.jsx';
import Loader from '../components/Loader/Loader';

const CharacterInfoPage = () => {
	let state = useSelector(({ state }) => state);
	let { isLoaded } = state;
	const { charId } = useParams();

	let char = state.data.find((e) => e.id === Number(charId));

	return isLoaded ? <CharacterInfo char={char} /> : <Loader />;
};

export default CharacterInfoPage;
