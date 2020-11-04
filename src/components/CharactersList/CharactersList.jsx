import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

import { badgeColor } from '../../utils/functions';
import './characters-list.scss';

const Characters = ({ data }) => {
	return (
		<div className="row">
			{data.map((e) => (
				<div className="item" key={e.id}>
					<Link to={`/character/${e.id}`}>
						<div className="content-wrapper">
							<img src={e.image} alt={e.id} />
							<h5 className="title">{e.name}</h5>
							<div className="gender">{e.gender}</div>
							<Badge pill variant={badgeColor(e.gender)}>
								{e.gender}
							</Badge>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

const CharactersList = ({ state, searchValue }) => {
	const { data } = state;

	let filteredData = data.filter(({ name }) =>
		name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return <Characters data={filteredData} />;
};

export default CharactersList;
