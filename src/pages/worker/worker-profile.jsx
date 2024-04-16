import { Link } from 'react-router-dom';
import SkillItem from './skill-item';
import emptyAvatar from '../../assets/empty-avatar.webp';

export default function WorkerProfile({
	worker,
	skills,
	inHirePage,
	isRecruiter,
}) {
	const { domicile, photo, email, name, job_desk, description, workplace } =
		worker;
	return (
		<section className='w-full lg:flex-shrink-0 lg:w-[360px] p-[30px] rounded-lg bg-white text-center lg:text-left'>
			<div className='w-[150px] h-[150px] mx-auto rounded-full overflow-hidden flex items-center justify-center mb-4'>
				<img
					src={photo ?? emptyAvatar}
					alt={photo ? name : ''}
					className='w-full h-full object-cover bg-empty-avatar bg-center bg-cover bg-no-repeat'
					width={150}
					height={150}
				/>
			</div>

			<h2 className='text-3xl lg:text-[22px] text-yankees-blue font-semibold mb-2 lg:mb-1'>
				{name}
			</h2>
			{job_desk && (
				<p className='lg:text-sm text-yankees-blue mb-3'>{job_desk}</p>
			)}
			{domicile && (
				<div className='flex justify-center lg:justify-start items-center gap-3 text-quick-silver mb-3'>
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
					<span className='lg:text-sm'>{domicile}</span>
				</div>
			)}
			{workplace && (
				<p className='text-quick-silver lg:text-sm mb-[18px]'>{workplace}</p>
			)}
			{description && (
				<p className='lg:text-sm text-quick-silver mb-9 tracking-wide'>
					{description}
				</p>
			)}
			{!inHirePage && isRecruiter ? (
				<Link
					to='hire'
					className='inline-flex items-center justify-center w-full text-white bg-primary-purple rounded font-bold p-4 mb-9'
				>
					Hire
				</Link>
			) : null}

			<section className='mb-14'>
				<h3 className='text-[22px] text-yankees-blue font-semibold mb-5'>
					Skills
				</h3>
				<ul className='flex flex-wrap justify-center lg:justify-start items-center gap-x-[10px] gap-y-5'>
					{skills.length > 0 ? (
						skills.map(({ skill_name, id }) => {
							return <SkillItem key={id}>{skill_name}</SkillItem>;
						})
					) : (
						<p>{name} belum menambahkan skill</p>
					)}
				</ul>
			</section>

			<ul className='grid justify-center lg:justify-start'>
				<li className='text-quick-silver flex items-center gap-5'>
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
					<span className='text-sm'>{email}</span>
				</li>
			</ul>
		</section>
	);
}
