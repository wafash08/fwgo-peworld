import { Form, Link } from 'react-router-dom';
import clsx from 'clsx';
import { BellIcon, MailIcon } from './icons';
import peworldLogo from '../assets/peworld-logo-purple.webp';
import emptyAvatar from '../assets/empty-avatar.webp';
import CustomLink from './custom-link';

export default function Navbar({ isAuthenticated = false, user, role }) {
	return (
		<div className='flex justify-between items-center h-20'>
			<Link to='/'>
				<img src={peworldLogo} alt='Logo Peworld' width={127} height={35} />
			</Link>

			<nav>
				<ul className='flex items-center gap-4 sm:gap-6'>
					{isAuthenticated ? (
						<>
							<NavItemWithIcon
								label='Lihat pemberitahuan'
								icon={<BellIcon />}
								className='hidden sm:block'
							/>
							<NavItemWithIcon
								label='Lihat pesan masuk'
								icon={<MailIcon />}
								className='hidden sm:block'
							/>
							<NavItemLinkAvatar
								src={user.photo ? user.photo : emptyAvatar}
								alt={user.name ? user.name : ''}
								to={role === 'worker' ? 'profile' : 'recruiter/profile'}
							/>
							<Form method='post'>
								<button
									type='submit'
									className='border border-red-500 bg-red-500 text-white rounded py-2 px-4'
								>
									Logout
								</button>
							</Form>
						</>
					) : (
						<>
							<CustomLink to='/login' variant='ghost' size='sm'>
								Masuk
							</CustomLink>
							<CustomLink to='/signup' variant='purple' size='sm'>
								Daftar
							</CustomLink>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
}

function NavItemWithIcon({ label, icon, className }) {
	return (
		<button type='button' className={clsx('text-roman-silver', className)}>
			<span className='sr-only'>{label}</span>
			{icon}
		</button>
	);
}

function NavItemLinkAvatar({ to, src, alt }) {
	return (
		<li className='flex items-center'>
			<Link
				to={to}
				className='inline-flex items-center justify-center w-8 h-8 rounded-full overflow-hidden'
			>
				<span className='sr-only'>Lihat profil anda</span>
				<img src={src} alt={alt} width={32} height={32} />
			</Link>
		</li>
	);
}
