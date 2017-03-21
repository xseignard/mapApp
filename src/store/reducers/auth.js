import { Map } from 'immutable';
import C from '../../constants';

const initialState = Map([
	['token', ''],
]);

export default (state = initialState, action) => {
	switch (action.type) {
		case C.ACCESS_TOKEN:
			return state.set('token', action.token);
		default:
			return state;
	}
};
