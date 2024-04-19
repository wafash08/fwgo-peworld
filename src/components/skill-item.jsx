export default function SkillItem({ skill }) {
	return (
		<li className='text-xs md:text-sm text-white bg-primary-yellow/60 border border-primary-yellow font-semibold py-2 px-5 rounded'>
			{skill}
		</li>
	);
}
