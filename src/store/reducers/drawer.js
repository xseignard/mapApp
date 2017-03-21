import { Map } from 'immutable';
import C from '../../constants';

const initialState = Map([
	['drawerState', 'closed'],
]);

export default (state = initialState, action) => {
	switch (action.type) {
		case C.OPEN_DRAWER:
			return state.set('drawerState', 'opened');
		case C.CLOSE_DRAWER:
			return state.set('drawerState', 'closed');
		default:
			return state;
	}
};
