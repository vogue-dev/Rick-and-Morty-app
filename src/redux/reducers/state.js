const initialState = {
	data: [],
	info: {},
	isLoaded: false,
};

const items = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				data: action.payload.results,
				info: action.payload.info,
				isLoaded: true,
			};
		case 'SET_DATA_FETCHING':
			return {
				...state,
				isLoaded: action.payload,
			};

		default:
			return state;
	}
};

export default items;
