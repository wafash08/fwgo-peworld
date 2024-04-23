export default function ExperienceList({ experiences }) {
	return (
		<ul className='flex flex-col gap-5'>
			{experiences.map(experience => (
				<ExperienceItem
					key={`${experience.position} at ${experience.company}`}
					experience={experience}
				/>
			))}
		</ul>
	);
}

function ExperienceItem({ experience }) {
	const { position, company, work_month, work_year, description } = experience;
	return (
		<li className='group flex gap-8'>
			<div className='hidden md:block w-[74px] h-[74px] rounded-full shrink-0'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					className='w-full'
				>
					<path
						d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='32'
					/>
					<path
						d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='32'
					/>
				</svg>
			</div>
			<div className='flex-1'>
				<h3 className='text-xl font-semibold text-yankees-blue mb-1'>
					{position}
				</h3>
				<p className='text-lg text-[#46505C]'>{company}</p>
				<p className='text-quick-silver mb-4'>
					{work_month} {work_year}
				</p>
				<p className='text-sm text-yankees-blue mb-5'>{description}</p>
				<div className='w-full h-[1px] bg-azureish-white group-last:hidden' />
			</div>
		</li>
	);
}
