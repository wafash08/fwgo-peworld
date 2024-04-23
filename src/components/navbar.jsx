import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { BellIcon, MailIcon } from './icons';
import peworldLogo from '../assets/peworld-logo-purple.webp';
import emptyAvatar from '../assets/empty-avatar.webp';
import CustomLink from './custom-link';
import { authFailed, authLoggedOut } from '../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { profileFailed, profileLoaded } from '../redux/actions/profile.action';
import { getRoleFromLocalStorage, getTokenFromLocalStorage } from '../utils';

export default function Navbar() {
	const user = useSelector(state => state.profile.profile);
	const token = getTokenFromLocalStorage();
	const role = getRoleFromLocalStorage();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		try {
			if (role === 'worker') {
				dispatch(profileLoaded(token));
			}
		} catch (error) {
			dispatch(profileFailed(error.message));
		}
	}, []);

	const handleLogout = async e => {
		e.preventDefault();
		try {
			await dispatch(authLoggedOut());
			navigate('/');
		} catch (error) {
			authFailed(error.message);
		}
	};

	return (
		<div className='flex justify-between items-center h-20'>
			<Link to='/'>
				<img src={peworldLogo} alt='Logo Peworld' width={127} height={35} />
			</Link>

			<nav>
				<ul className='flex items-center gap-4 sm:gap-6'>
					{token ? (
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
							<form method='post' onSubmit={handleLogout}>
								<button
									type='submit'
									className='border border-red-500 bg-red-500 text-white rounded inline-flex justify-center items-center w-20 h-10 text-sm font-bold'
								>
									Logout
								</button>
							</form>
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
