export const setCurrentPage = (num) => async (dispatch) => {
	dispatch({ type: 'SET_CURRENT_PAGE', payload: num });
};

export const setPagination = (array) => async (dispatch) => {
	dispatch({ type: 'SET_PAGINATION', payload: array });
};
