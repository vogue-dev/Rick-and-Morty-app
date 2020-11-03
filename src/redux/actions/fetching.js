import axios from 'axios';

export const gettingData = () => async (dispatch) => {
	await axios.get('').then(({ data }) => {
		dispatch(setData(data));
	});
};

export const setData = (data) => ({
	type: 'SET_DATA',
	payload: data,
});

export const setFetching = (payload) => ({
	type: 'SET_DATA_FETCHING',
	payload,
});
