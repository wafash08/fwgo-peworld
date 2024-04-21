import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { profileReducer } from './profile.reducer';
import { skillsReducer } from './skills.reducer';
import { portfolioReducer } from './portfolio.reducer';

const rootReducers = combineReducers({
	user: authReducer,
	profile: profileReducer,
	skills: skillsReducer,
	portfolio: portfolioReducer,
});

export default rootReducers;
