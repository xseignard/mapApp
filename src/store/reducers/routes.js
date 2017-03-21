import { Map } from 'immutable';
import { ActionConst } from 'react-native-router-flux';

const initialState = Map([
	['scene', {}],
]);

export default (state = initialState, action) => {
	switch (action.type) {
		// focus action is dispatched when a new screen comes into focus
		case ActionConst.FOCUS:
			return state.set('scene', action.scene);
		default:
			return state;
	}
};
