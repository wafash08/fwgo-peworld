export default function PortfolioList({ portfolio }) {
	return (
		<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portfolio.map(({ id, image, application_name }) => {
				return <PortfolioItem key={id} src={image} name={application_name} />;
			})}
		</ul>
	);
}

function PortfolioItem({ src, name }) {
	return (
		<li>
			<div className='rounded overflow-hidden mb-3 h-40'>
				<img src={src} alt={name} className='h-full w-full object-cover' />
			</div>
			<p className='text-center text-sm text-yankees-blue'>{name}</p>
		</li>
	);
}
