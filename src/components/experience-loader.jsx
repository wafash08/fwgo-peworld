export default function ExperienceSkeleton() {
	return (
		<ul className='flex flex-col gap-5 animate-pulse'>
			<li className='group flex gap-8'>
				<div className='hidden md:block w-[74px] h-[74px] rounded-full shrink-0 bg-quick-silver/50' />
				<div className='flex-1'>
					<div className='h-6 w-24 bg-quick-silver/50 mb-1' />
					<div className='h-5 w-8 bg-quick-silver/50 mb-1' />
					<div className='h-5 w-16 bg-quick-silver/50 mb-4' />
					<div className='h-5 w-full bg-quick-silver/50 mb-5' />
				</div>
			</li>
		</ul>
	);
}
