import { Link } from 'react-router-dom';
import SkillItem from './skill-item';
import emptyAvatar from '../../assets/empty-avatar.webp';

export default function WorkerItem({ worker }) {
	const { photo, name, domicile, skills, job, id } = worker;
	return (
		<li className='flex flex-col md:flex-row items-center gap-7 px-5 py-10 border-b-2 border-b-cultured last:border-b-0'>
			<div className='w-[100px] h-[100px] rounded-full bg-quick-silver overflow-hidden'>
				<img src={photo || emptyAvatar} alt={name} />
			</div>
			<div className='flex-1 text-center md:text-left'>
				<h3 className='text-[22px] font-semibold text-yankees-blue mb-1'>
					{name}
				</h3>
				{job && <p className='text-sm text-quick-silver mb-2'>{job}</p>}
				{domicile && (
					<p className='text-sm flex justify-center md:justify-start items-center gap-[10px] text-quick-silver mb-4'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path
								d='M14 6.66675C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66675C2 5.07545 2.63214 3.54933 3.75736 2.42411C4.88258 1.29889 6.4087 0.666748 8 0.666748C9.5913 0.666748 11.1174 1.29889 12.2426 2.42411C13.3679 3.54933 14 5.07545 14 6.66675Z'
								stroke='currentColor'
								strokeWidth='1.33333'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z'
								stroke='currentColor'
								strokeWidth='1.33333'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span>{domicile}</span>
					</p>
				)}
				{skills.length > 0 && (
					<ul className='flex gap-[10px] justify-center md:justify-start items-center flex-wrap'>
						{skills.map((skill, idx) => (
							<SkillItem key={`${skill} ke ${idx + 1}`} name={skill} />
						))}
					</ul>
				)}
			</div>
			<Link
				to={`/workers/${id}`}
				className='text-white font-semibold bg-primary-purple rounded py-4 px-8 lg:mr-12'
			>
				Lihat Profil
			</Link>
		</li>
	);
}
