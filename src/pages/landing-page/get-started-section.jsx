import { Link } from 'react-router-dom';
import Container from '../../components/container';

export default function GetStartedSection() {
	return (
		<section className='my-40'>
			<Container>
				<div className='flex flex-col md:flex-row justify-between items-center gap-10 py-14 px-8 md:px-16 bg-primary-purple rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg text-white bg-wave bg-no-repeat bg-left-bottom'>
					<h2 className='text-center md:text-left text-2xl md:text-4xl font-semibold max-w-xs md:leading-relaxed'>
						Lorem ipsum dolor sit amet
					</h2>
					<Link
						to='home'
						className='inline-flex justify-center items-center text-center py-5 px-6 text-primary-purple font-bold border border-white bg-white rounded'
					>
						Mulai dari sekarang
					</Link>
				</div>
			</Container>
		</section>
	);
}
