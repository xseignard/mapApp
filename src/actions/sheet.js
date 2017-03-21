import C from '../constants';

export const nameGet = (name) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.NAME_GET,
			name,
		});
	};
};

export const valueGet = (value) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.VALUE_GET,
			value,
		});
	};
};

export const valuePost = (success) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.VALUE_POST,
			success,
		});
	};
};
