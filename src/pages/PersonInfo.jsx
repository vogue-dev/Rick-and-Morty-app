import React from 'react';
import { useParams } from 'react-router-dom';

import CharacterInfo from '../components/CharacterInfo/CharacterInfo';

const PersonInfo = ({ state }) => {
	let { isLoaded } = state;
	const { charId } = useParams();

	let char = state.data.find((e) => e.id === Number(charId));

	return isLoaded ? <CharacterInfo char={char} /> : <div>Loading...</div>;
};

export default PersonInfo;
