import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';

const PersonInfo = styled.div`
	 {
		.char-info {
			text-align: center;
			padding: 20px;
			margin: 0 auto;
			background-color: white;
			font-size: 20px;
			box-shadow: 0 0px 10px rgba(0, 0, 0, 0.35);
			display: flex;
			flex-direction: column;
			justify-content: center;

			& .image {
				margin: 0 auto;
				margin-bottom: 10px;
			}
		}
	}
`;

const Title = styled.h2`
	 {
		text-align: center;
	}
`;

const DetailedInfo = ({ data, charId }) => {
	const char = data.find((e) => e.id === Number(charId));

	return char ? (
		<PersonInfo>
			<Title>Детали персонажа</Title>
			<div className="char-info col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				<div className="image">
					<img src={char.image} alt={char.name} />
				</div>
				<h3 className="name">Name: {char.name}</h3>
				<div className="gender">Gender: {char.gender}</div>
				<div className="id">id: {char.id}</div>
				<div className="type">Type: {char.type ? char.type : '-'}</div>
				<div className="status">Status: {char.status}</div>
				<div className="species">Species: {char.species}</div>
				<div className="location">Location: {char.location.name}</div>
			</div>
		</PersonInfo>
	) : (
		<Loader />
	);
};

export default DetailedInfo;
