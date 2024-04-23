import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { profileReducer } from './profile.reducer';
import { skillsReducer } from './skills.reducer';
import { portfolioReducer } from './portfolio.reducer';
import { experienceReducer } from './experience.reducer';
import { workerReducer } from './worker.reducer';
import { recruiterReducer } from './recruiter.reducer';
import { hireReducer } from './hire.reducer';
import { homeReducer } from './home.reducer';

const rootReducers = combineReducers({
	auth: authReducer,
	home: homeReducer,
	profile: profileReducer,
	skills: skillsReducer,
	portfolio: portfolioReducer,
	experiences: experienceReducer,
	worker: workerReducer,
	recruiter: recruiterReducer,
	hire: hireReducer,
});

export default rootReducers;
