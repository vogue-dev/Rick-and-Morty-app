import React from 'react';
import { Link } from 'react-router-dom';

import './characters.scss';

const CharactersOut = ({ data }) => {
	return (
		<div className="row">
			{data.map((e) => (
				<div className="item" key={e.id}>
					<Link to={`/character/${e.id}`}>
						<div className="content-wrapper">
							<img src={e.image} alt={e.id} />
							<h4 className="title">{e.name}</h4>
							<div className="gender">{e.gender}</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

const Characters = ({ state, searchValue }) => {
	let { data } = state;

	let filteredData = data.filter(({ name }) =>
		name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return <CharactersOut data={filteredData} />;
};

export default Characters;
