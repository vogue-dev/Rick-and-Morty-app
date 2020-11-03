const initialState = {
	data: [],
	isLoaded: false,
};

const items = (state = initialState, action) => {
	// console.log('action.payload', action.payload);
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				data: action.payload,
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
