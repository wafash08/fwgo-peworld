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
			<div className='w-[74px] h-[74px] rounded-full bg-empty-avatar bg-no-repeat bg-center bg-cover shrink-0' />
			<div className='flex-1'>
				<h3 className='text-xl font-semibold text-yankees-blue mb-1'>
					{position}
				</h3>
				<p className='text-lg text-[#46505C]'>{company}</p>
				<p className='text-quick-silver mb-4'>
					{work_month}
					{work_year}
				</p>
				<p className='text-sm text-yankees-blue mb-5'>{description}</p>
				<div className='w-full h-[1px] bg-azureish-white group-last:hidden' />
			</div>
		</li>
	);
}
