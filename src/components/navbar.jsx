import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { recruiterLoaded } from '../redux/actions/recruiter.action';
import { useNotifications } from '../hooks';

export default function Navbar() {
	const profile = useSelector(state => state.profile.profile);
	const { recruiter } = useSelector(state => state.recruiter);
	const { status: notificationsStatus, total } = useNotifications();
	const token = getTokenFromLocalStorage();
	const role = getRoleFromLocalStorage();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const paths = pathname.split('/');
	const inHomePage = paths.every(path => path === '');

	const user = role === 'worker' ? profile : recruiter;

	useEffect(() => {
		try {
			if (role === 'worker') {
				dispatch(profileLoaded(token));
			} else if (role === 'recruiter') {
				dispatch(recruiterLoaded(token));
			}
		} catch (error) {
			dispatch(profileFailed(error.message));
		}
	}, []);

	const handleLogout = async e => {
		try {
			e.preventDefault();
			dispatch(authLoggedOut());
			navigate('/');
		} catch (error) {
			authFailed(error.message);
		}
	};

	return (
		<div className='flex justify-between items-center h-20'>
			<div className='flex items-center gap-28'>
				<Link to='/'>
					<img src={peworldLogo} alt='Logo Peworld' width={127} height={35} />
				</Link>

				<Link
					to='/home'
					className={clsx(
						'hidden text-lg text-yankees-blue font-semibold py-2 px-4 rounded transition-colors bg-transparent hover:bg-slate-100 focus:bg-slate-100 focus:outline-none',
						inHomePage ? 'md:block' : 'hidden'
					)}
				>
					Home
				</Link>
			</div>

			<nav>
				<ul className='flex items-center gap-4 sm:gap-6'>
					{token ? (
						<>
							<li className='relative group hidden sm:block'>
								<NavItemWithIcon
									label='Lihat pemberitahuan'
									icon={<BellIcon />}
									to='/notifications'
								/>
								<span
									className={clsx(
										'absolute -top-1 -right-1 inline-flex items-center justify-center min-w-4 aspect-square rounded-full text-[10px] bg-red-500 text-white transition-transform duration-300',
										notificationsStatus === 'new' ? 'scale-100' : 'scale-0'
									)}
								>
									{total}
								</span>
							</li>
							<li className='relative group hidden sm:block'>
								<NavItemWithIcon
									label='Lihat pesan masuk'
									icon={<MailIcon />}
									to='/messages'
									disabled
								/>
							</li>
							<NavItemLinkAvatar
								src={user.photo ? user.photo : emptyAvatar}
								alt={user.name ? user.name : ''}
								to={role === 'worker' ? 'profile' : 'recruiter/profile'}
							/>
							{/* ubah method */}
							<form method='get' onSubmit={handleLogout}>
								<button
									type='submit'
									className={clsx(
										'border border-red-500 bg-red-500 text-white rounded inline-flex justify-center items-center px-4 py-2 text-xs font-bold',
										'ring-2 ring-offset-0 ring-transparent',
										'hover:ring-red-500 focus:ring-red-500 hover:ring-offset-2 focus:ring-offset-2 transition-all focus:outline-none'
									)}
								>
									Signout
								</button>
							</form>
						</>
					) : (
						<>
							<CustomLink to='/login' variant='ghost' size='sm'>
								Singin
							</CustomLink>
							<CustomLink to='/signup' variant='purple' size='sm'>
								Signup
							</CustomLink>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
}

function NavItemWithIcon({
	label,
	icon,
	className,
	to,
	disabled = false,
	...props
}) {
	return (
		<Link
			className={clsx(
				'text-roman-silver transition-colors',
				className,
				disabled && 'pointer-events-none'
			)}
			to={to}
			{...props}
		>
			<span className='sr-only'>{label}</span>
			{icon}
		</Link>
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
