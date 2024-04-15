import {
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	PhoneIcon,
} from '../../components/icons';
import emptyAvatar from '../../assets/empty-avatar.webp';
import { Link } from 'react-router-dom';

export default function RecruiterProfile({ recruiter }) {
	const {
		city,
		company,
		description,
		email,
		instagram,
		linkedin,
		name,
		phone,
		photo,
		position,
	} = recruiter;

	const socialMediaList = [
		{
			type: 'email',
			username: email,
			icon: <MailIcon />,
		},
		{
			type: 'instagram',
			username: instagram,
			icon: <InstagramIcon />,
		},
		{
			type: 'phone',
			username: phone,
			icon: <PhoneIcon />,
		},
		{
			type: 'linkedin',
			username: linkedin,
			icon: <LinkedinIcon />,
		},
	];
	return (
		<>
			<div className='bg-primary-purple rounded-tl-lg rounded-tr-lg h-48 w-full relative'>
				<button
					type='button'
					className='text-white absolute bottom-2 right-4 flex items-center gap-2'
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
							d='M15.7381 2.33586L13.6622 0.260036C13.3155 -0.0866786 12.751 -0.0866786 12.4042 0.260036L10.7773 1.88693L14.1111 5.22072L15.738 3.59383C16.0848 3.24711 16.0848 2.68258 15.7381 2.33586Z'
							fill='currentColor'
						/>
					</svg>
					<span>Ubah latar</span>
				</button>
			</div>
			<section className='bg-white rounded-bl-lg rounded-br-lg pb-32'>
				<div className='z-10 relative w-[150px] h-[150px] mx-auto rounded-full mb-4 -mt-[75px] overflow-hidden'>
					<img
						src={photo ?? emptyAvatar}
						alt={photo ? name : ''}
						width={150}
						height={150}
					/>
				</div>
				<h1 className='text-center text-yankees-blue text-[22px] font-semibold mb-2'>
					{name}
				</h1>
				{position && (
					<p className='text-center text-yankees-blue text-sm mb-3'>
						{position}
					</p>
				)}
				{company && (
					<p className='text-center text-yankees-blue text-sm mb-3'>
						{company}
					</p>
				)}
				{city && (
					<p className='flex items-center gap-3 w-max mx-auto text-quick-silver text-sm mb-5'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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
						<span>{city}</span>
					</p>
				)}
				{description && (
					<p className='text-center max-w-xl mx-auto text-quick-silver text-sm mb-8'>
						{description}
					</p>
				)}
				<div className='flex justify-center mb-10'>
					<Link
						to='edit'
						className='flex justify-center items-center p-4 w-full max-w-80 text-white font-bold bg-primary-purple border border-primary-purple rounded'
					>
						Edit Profile
					</Link>
				</div>
				<div className='flex justify-center'>
					<SocialMediaList socialMediaList={socialMediaList} />
				</div>
			</section>
		</>
	);
}

function SocialMediaList({ socialMediaList }) {
	return (
		<ul className='grid gap-6'>
			{socialMediaList.map(({ icon, type, username }) => {
				return <SocialMediaItem key={type} icon={icon} username={username} />;
			})}
		</ul>
	);
}

function SocialMediaItem({ icon, username }) {
	return username ? (
		<li>
			<button
				type='button'
				className='flex items-center gap-5 text-quick-silver text-sm'
			>
				{icon} <span>{username}</span>
			</button>
		</li>
	) : null;
}
