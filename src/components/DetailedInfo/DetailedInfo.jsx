import React from 'react';
import styled from 'styled-components';

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

const DetailedInfo = ({ data }) => {
	return data ? (
		<PersonInfo>
			<Title>Детали персонажа</Title>
			<div className="char-info col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				<div className="image">
					<img src={data.image} alt={data.name} />
				</div>
				<h3 className="name">Name: {data.name}</h3>
				<div className="gender">Gender: {data.gender}</div>
				<div className="id">id: {data.id}</div>
				<div className="type">Type: {data.type ? data.type : '-'}</div>
				<div className="status">Status: {data.status}</div>
				<div className="species">Species: {data.species}</div>
				<div className="location">Location: {data.location.name}</div>
			</div>
		</PersonInfo>
	) : (
		<div>Loading...</div>
	);
};

export default DetailedInfo;
