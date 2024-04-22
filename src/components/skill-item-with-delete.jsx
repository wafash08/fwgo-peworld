import { useDispatch } from 'react-redux';
import { skillDeleted, skillsFailed } from '../redux/actions/skills.action';
import { getTokenFromLocalStorage } from '../utils';

export default function SkillItemWithDelete({ skill, id, ...props }) {
	const dispatch = useDispatch();
	const handleDeleteSkill = id => {
		const token = getTokenFromLocalStorage();

		try {
			dispatch(skillDeleted(id, token));
		} catch (error) {
			dispatch(skillsFailed(error.message));
		}
	};
	return (
		<li className='text-xs md:text-sm text-white bg-primary-yellow/60 border border-primary-yellow font-semibold rounded flex justify-between items-center py-2 px-2'>
			<span className='inline-flex mr-5'>{skill}</span>
			<button
				type='button'
				{...props}
				onClick={() => handleDeleteSkill(id)}
				className='transition-colors hover:text-red-500 duration-300'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					className='w-6'
				>
					<path
						d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='32'
					/>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='32'
						d='M80 112h352'
					/>
					<path
						d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='32'
					/>
				</svg>
				<span className='sr-only'>hapus skill</span>
			</button>
		</li>
	);
}
