import PortfolioSkeleton from './portfolio-skeleton';

export default function PortfolioList({ name, portfolio, status }) {
	if (status === 'loading') {
		return <PortfolioSkeleton />;
	}
	if (portfolio.length === 0) {
		return (
			<p className='text-left'>
				<span className='capitalize'>{name}</span> belum memiliki portfolio
			</p>
		);
	}

	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portfolio.map(({ id, image, application_name, link_repository }) => {
				return (
					<PortfolioItem
						key={id}
						src={image}
						name={application_name}
						to={link_repository}
					/>
				);
			})}
		</ul>
	);
}

function PortfolioItem({ src, name, to }) {
	const startWithHttps = to.startsWith('https');
	return (
		<li className='group'>
			<a
				href={startWithHttps ? to : 'https://' + to}
				target='_blank'
				rel='noopener noreferrer'
				className='rounded block'
			>
				<div className='rounded overflow-hidden mb-3 h-40 border border-slate-200'>
					<img
						src={src}
						alt={name}
						className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300'
					/>
				</div>
				<p className='text-center text-sm text-yankees-blue group-hover:underline'>
					{name}
				</p>
			</a>
		</li>
	);
}
