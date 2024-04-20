import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';

const rootReducers = combineReducers({
	user: authReducer,
});

export default rootReducers;
