export default function PortfolioItem({ src, name }) {
	return (
		<li>
			<div className='rounded overflow-hidden mb-3 h-40'>
				<img src={src} alt={name} className='h-full w-full object-cover' />
			</div>
			<p className='text-center text-sm text-yankees-blue'>{name}</p>
		</li>
	);
}
