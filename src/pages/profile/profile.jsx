import SkillItem from '../../components/skill-item';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTokenFromLocalStorage } from '../../utils';
import { skillsFailed, skillsLoaded } from '../../redux/actions/skills.action';
import SkillSkeleton from '../../components/skill-skeleton';
import ProfileSection from './profile-section';

export default function Profile() {
	const token = getTokenFromLocalStorage();
	const dispatch = useDispatch();
	const profile = useSelector(state => state.profile.profile);
	const skills = useSelector(state => state.skills.skills);
	const statusSkills = useSelector(state => state.skills.status);

	useEffect(() => {
		try {
			dispatch(skillsLoaded(token));
		} catch (error) {
			dispatch(skillsFailed(error.message));
		}
	}, []);

	return (
		<section className='w-full lg:w-[360px] lg:shrink-0 p-[30px] rounded-lg bg-white text-center lg:text-left'>
			<ProfileSection />

			{statusSkills === 'loading' ? (
				<SkillSkeleton />
			) : (
				<>
					<section className='mb-14'>
						<h3 className='text-[22px] text-yankees-blue font-semibold mb-5'>
							Skills
						</h3>
						{skills.length > 0 ? (
							<ul className='flex flex-wrap justify-center lg:justify-start items-center gap-x-[10px] gap-y-5'>
								{skills.map(({ skill_name, id }, idx) => {
									return (
										<SkillItem
											key={id ?? `${skill_name} - ${idx}`}
											skill={skill_name}
										/>
									);
								})}
							</ul>
						) : (
							<p>Ayo tambahkan skill kamu</p>
						)}
					</section>
					<ul>
						<li className='text-quick-silver flex justify-center lg:justify-start items-center gap-5'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden
							>
								<path
									d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
									stroke='currentColor'
									strokeWidth='2.33333'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M22 6L12 13L2 6'
									stroke='currentColor'
									strokeWidth='2.33333'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span className='text-sm'>{profile.email}</span>
						</li>
					</ul>
				</>
			)}
		</section>
	);
}
