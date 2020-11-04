import React from 'react';

import './detailed-info.scss';

const DetailedInfo = ({ char }) => {
	return (
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
	);
};

export default DetailedInfo;
