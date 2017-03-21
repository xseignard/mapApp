import { Map } from 'immutable';
import C from '../../constants';

const initialState = Map([
	['name', ''],
]);

export default (state = initialState, action) => {
	switch (action.type) {
		case C.NAME_GET:
			return state.set('name', action.name);
		// TODO: handle other action types
		default:
			return state;
	}
};
