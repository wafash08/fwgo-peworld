import { Link } from 'react-router-dom';

export default function Profile({ profile, skills }) {
	console.log('profile >> ', profile);
	const { domicile, photo, email, name, job_desk, description, workplace } =
		profile;
	return (
		<section className='w-[360px] p-[30px] rounded-lg bg-white h-fit'>
			<div className='w-[150px] h-[150px] mx-auto rounded-full overflow-hidden flex items-center justify-center mb-4'>
				<img
					src={photo}
					alt={photo ? name : ''}
					className='w-full h-full object-cover bg-empty-avatar bg-center bg-cover bg-no-repeat'
					width={150}
					height={150}
				/>
			</div>

			<div className='flex justify-center mb-10'>
				<Link
					to='edit'
					className='text-quick-silver font-semibold text-[22px] inline-flex items-center gap-2'
				>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 12.6663V16.0001H3.33379L13.1707 6.16314L9.8369 2.82935L0 12.6663Z'
							fill='currentColor'
						/>
						<path
							d='M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z'
							fill='currentColor'
						/>
					</svg>
					<span>Edit</span>
				</Link>
			</div>
			<h2 className='text-[22px] text-yankees-blue font-semibold mb-1'>
				{name}
			</h2>
			<p className='text-sm text-yankees-blue mb-3'>{job_desk}</p>
			{domicile && (
				<div className='flex items-center gap-3 text-quick-silver mb-3'>
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
					<span className='text-sm'>{domicile}</span>
				</div>
			)}
			{workplace && (
				<p className='text-quick-silver text-sm mb-[18px]'>{workplace}</p>
			)}
			{description && (
				<p className='text-sm text-quick-silver mb-9 tracking-wide'>
					{description}
				</p>
			)}
			<Link
				to='/hire'
				className='inline-flex items-center justify-center w-full text-white bg-primary-purple rounded font-bold p-4 mb-9'
			>
				Hire
			</Link>

			<section className='mb-14'>
				<h3 className='text-[22px] text-yankees-blue font-semibold mb-5'>
					Skills
				</h3>
				<ul className='flex flex-wrap items-center gap-x-[10px] gap-y-5'>
					{skills.length > 0 ? (
						skills.map(({ skill_name, id }) => {
							return <SkillItem key={id}>{skill_name}</SkillItem>;
						})
					) : (
						<p>Ayo tambahkan skill kamu</p>
					)}
				</ul>
			</section>

			<ul>
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
