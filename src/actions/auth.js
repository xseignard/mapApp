import C from '../constants';

export default (token) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.ACCESS_TOKEN,
			token,
		});
	};
};
