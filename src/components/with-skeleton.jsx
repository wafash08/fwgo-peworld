import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileFailed, profileLoaded } from '../redux/actions/profile.action';
import { getTokenFromLocalStorage } from '../utils';
import ProfileSkeleton from './profile-skeleton';

export default function withSkeleton(Component) {
	return props => {
		const token = getTokenFromLocalStorage();
		const dispatch = useDispatch();
		const { profile, status } = useSelector(state => state.profile);

		useEffect(() => {
			try {
				dispatch(profileLoaded(token));
			} catch (error) {
				dispatch(profileFailed(error.message));
			}
		}, []);

		if (status === 'loading') {
			return <ProfileSkeleton />;
		}

		return <Component {...props} profile={profile} />;
	};
}
