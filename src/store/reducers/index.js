import { combineReducers } from 'redux';
import sheet from './sheet';
import auth from './auth';
import drawer from './drawer';
import routes from './routes';

const rootReducer = combineReducers({
	sheet,
	auth,
	drawer,
	routes,
});

export default rootReducer;
