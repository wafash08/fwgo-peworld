import { Link } from 'react-router-dom';
import Container from '../../components/container';

export default function GetStartedSection() {
	return (
		<section className='my-40'>
			<Container>
				<div className='flex justify-between items-center py-14 px-16 bg-primary-purple rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg text-white bg-wave bg-no-repeat bg-left-bottom'>
					<h2 className='text-4xl font-semibold max-w-xs leading-relaxed'>
						Lorem ipsum dolor sit amet
					</h2>
					<Link
						to='home'
						className='inline-flex justify-center items-center py-5 px-6 text-primary-purple font-bold border border-white bg-white rounded'
					>
						Mulai dari sekarang
					</Link>
				</div>
			</Container>
		</section>
	);
}
