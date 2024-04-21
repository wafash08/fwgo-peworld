import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { profileReducer } from './profile.reducer';
import { skillsReducer } from './skills.reducer';

const rootReducers = combineReducers({
	user: authReducer,
	profile: profileReducer,
	skills: skillsReducer,
});

export default rootReducers;
