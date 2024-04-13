import { Link, useNavigate } from 'react-router-dom';
import emptyAvatar from '../../../assets/empty-avatar.png';

export default function EditRecruiterProfile({ recruiter }) {
	const { city, name, photo, position } = recruiter;
	const navigate = useNavigate();

	return (
		<div>
			<section className='w-[360px] p-[30px] rounded-lg bg-white mb-5'>
				<div className='w-[150px] h-[150px] mx-auto rounded-full overflow-hidden flex items-center justify-center mb-4'>
					<img
						src={photo ?? emptyAvatar}
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
				<p className='text-sm text-yankees-blue mb-3'>{position}</p>
				{city && (
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
						<span className='text-sm'>{city}</span>
					</div>
				)}
			</section>
			<button
				type='button'
				className='font-bold text-primary-purple p-3 bg-transparent border border-primary-purple rounded w-full'
				onClick={() => {
					navigate(-1);
				}}
			>
				Batal
			</button>
		</div>
	);
}
