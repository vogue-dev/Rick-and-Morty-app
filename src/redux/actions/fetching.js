import axios from 'axios';

export const fetchingData = () => async (dispatch) => {
	axios
		.get('https://rickandmortyapi.com/api/character/')
		.then((response) => dispatch(setData(response.data)));
};

export const setData = (data) => ({
	type: 'SET_DATA',
	payload: data,
});

export const setFetching = (payload) => ({
	type: 'SET_DATA_FETCHING',
	payload,
});
