const initialState = {
	data: [],
	info: {},
	isLoaded: false,
	currentPage: 1,
	pagination: [1, 2, 3, 4, 5],
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

		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			};

		case 'SET_PAGINATION':
			return {
				...state,
				pagination: action.payload,
			};

		default:
			return state;
	}
};

export default items;
