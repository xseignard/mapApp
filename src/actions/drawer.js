import C from '../constants';

export const openDrawer = () => {
	return (dispatch, getState) => {
		dispatch({
			type: C.OPEN_DRAWER,
		});
	};
};

export const closeDrawer = () => {
	return (dispatch, getState) => {
		dispatch({
			type: C.CLOSE_DRAWER
		});
	};
};
