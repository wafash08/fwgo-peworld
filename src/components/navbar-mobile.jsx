import { Link } from 'react-router-dom';
import { HomeIcon, MessageIcon, SearchIcon } from './icons';
import louisTomlinsonAvatar from '../assets/louis-tomlinson.png';

const NAVBAR_LIST = [
	{ label: 'Beranda', to: '/home', withAvatar: false, icon: <HomeIcon /> },
	{ label: 'Cari', to: '/search', withAvatar: false, icon: <SearchIcon /> },
	{ label: 'Pesan', to: '/messages', withAvatar: false, icon: <MessageIcon /> },
	{
		label: 'Profile',
		to: '/profile',
		withAvatar: true,
		icon: null,
		avatar: { src: louisTomlinsonAvatar, alt: 'lihat profil' },
	},
];

// box-shadow: 0px -6px 20px 0px #AFAFAF40;
export default function NavbarMobile() {
	return (
		<nav className='fixed bottom-0 left-0 w-full h-20 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_-6px_20px_0px_#afafaf40]'>
			<ul className='flex items-center justify-evenly h-full border-debug rounded-tl-[30px] rounded-tr-[30px]'>
				{NAVBAR_LIST.map(({ icon, label, to, withAvatar, avatar }) => {
					return withAvatar ? (
						<Link
							to={to}
							key={label}
							className='inline-flex items-center justify-center w-6 h-6 rounded-full'
						>
							<img
								src={avatar.src}
								alt={avatar.alt}
								width={24}
								height={24}
								className='object-cover'
							/>
						</Link>
					) : (
						<Link to={to} key={label} className='text-quick-silver'>
							<span className='sr-only'>Ke {label}</span>
							{icon}
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}
