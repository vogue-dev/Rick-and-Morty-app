import React from 'react';

import './loader.scss';

const Loader = React.memo(function Loader() {
	return (
		<div className="loader-wrapper h-100 w-100 position-absolute">
			<div className="loader" />
		</div>
	);
});

export default Loader;
