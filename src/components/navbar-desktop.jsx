import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { BellIcon, MailIcon } from './icons';
import peworldLogo from '../assets/peworld-logo-purple.png';
import louisTomlinson from '../assets/louis-tomlinson.png';

export default function NavbarDesktop({ isAuthenticated = false }) {
	return (
		<div className='flex justify-between items-center h-20'>
			<Link to='/'>
				<img src={peworldLogo} alt='Logo Peworld' width={127} height={35} />
			</Link>

			<nav>
				{isAuthenticated ? (
					<ul className='flex items-center gap-10'>
						<NavItemWithIcon label='Lihat pemberitahuan' icon={<BellIcon />} />
						<NavItemWithIcon label='Lihat pesan masuk' icon={<MailIcon />} />
						<NavItemLinkAvatar
							src={louisTomlinson}
							alt='Louis Tomlinson'
							to='/profile'
						/>
					</ul>
				) : (
					<ul className='flex items-center gap-4'>
						<NavItemLink to='/login' label='Masuk' variant='ghost' />
						<NavItemLink to='/register' label='Daftar' />
					</ul>
				)}
			</nav>
		</div>
	);
}

function NavItemWithIcon({ label, icon }) {
	return (
		<button type='button'>
			<span className='sr-only'>{label}</span>
			{icon}
		</button>
	);
}

function NavItemLink({ to, label, variant = 'purple' }) {
	let variantStyles = '';

	switch (variant) {
		case 'purple': {
			variantStyles = 'bg-primary-purple text-white';
			break;
		}

		case 'ghost': {
			variantStyles = 'bg-white text-primary-purple';
			break;
		}
	}

	return (
		<li>
			<Link
				to={to}
				className={clsx(
					'inline-flex py-[10px] px-5 text-sm border border-primary-purple rounded font-bold',
					variantStyles
				)}
			>
				{label}
			</Link>
		</li>
	);
}

function NavItemLinkAvatar({ to, src, alt }) {
	return (
		<li>
			<Link
				to={to}
				className='inline-flex items-center justify-center w-8 h-8 rounded-full'
			>
				<span className='sr-only'>Lihat profil anda</span>
				<img src={src} alt={alt} />
			</Link>
		</li>
	);
}
