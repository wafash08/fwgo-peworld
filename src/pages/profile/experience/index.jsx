import ExperienceList from '../../../components/experience-list';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { experienceLoaded } from '../../../redux/actions/experience.action';
import { getTokenFromLocalStorage } from '../../../utils';
import ExperienceSkeleton from '../../../components/experience-loader';

export default function ProfileExperience() {
	// const { experiences } = useLoaderData();
	const dispatch = useDispatch();
	const { experiences } = useSelector(state => state.experiences);
	const status = useSelector(state => state.experiences.status);

	useEffect(() => {
		// todos: handling error
		const token = getTokenFromLocalStorage();
		dispatch(experienceLoaded(token));
	}, []);

	if (status === 'loading') {
		return <ExperienceSkeleton />;
	}

	return experiences.length > 0 ? (
		<ExperienceList experiences={experiences} />
	) : (
		<p>Kamu belum memiliki pengalaman</p>
	);
}
