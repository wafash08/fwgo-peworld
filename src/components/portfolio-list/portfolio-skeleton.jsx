export default function PortfolioSkeleton() {
	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[30px] animate-pulse'>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver/50' />
				<div className='h-5 bg-quick-silver/50' />
			</li>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver/50' />
				<div className='h-5 bg-quick-silver/50' />
			</li>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver/50' />
				<div className='h-5 bg-quick-silver/50' />
			</li>
		</ul>
	);
}
