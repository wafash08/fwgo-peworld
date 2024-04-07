export default function SkillItem({ name }) {
	return (
		<li className='text-xs text-white bg-primary-yellow/60 border border-primary-yellow font-semibold py-2 px-5 rounded'>
			{name}
		</li>
	);
}
