import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

import './characters.scss';

const CharactersOut = ({ data }) => {
	return (
		<div className="row">
			{data.map((e) => (
				<div className="item" key={e.id}>
					<Link to={`/character/${e.id}`}>
						<div className="content-wrapper">
							<img src={e.image} alt={e.id} />
							<h5 className="title">{e.name}</h5>
							<div className="gender">{e.gender}</div>
							<Badge
								pill
								variant={
									e.gender === 'Male'
										? 'primary'
										: 'Female'
										? 'danger'
										: 'unknown'
										? 'secondary'
										: 'light'
								}>
								{e.gender}
							</Badge>
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
