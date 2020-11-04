import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
	 {
		margin-bottom: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

		& input {
			margin-left: 10px;
		}
	}
`;

const Fitlers = ({ filterByName }) => {
	return (
		<>
			<h2 className="text-center">Список всех персонажей</h2>
			<FilterWrapper>
				Search by Name
				<input placeholder="Search..." onChange={filterByName} />
			</FilterWrapper>
		</>
	);
};

export default Fitlers;
