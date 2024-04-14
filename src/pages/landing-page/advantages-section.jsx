import { TickIcon } from '../../components/icons';
import advantagesImage from '../../assets/advantages.webp';
import Container from '../../components/container';

export default function AdvantagesSection() {
	return (
		<section className='mt-40'>
			<Container className='flex items-start gap-14'>
				<div className='flex-1'>
					<div className='relative w-[496px] h-[390px]'>
						<div className='absolute w-full h-full bg-azureish-white rotate-12 -z-10' />
						<img
							src={advantagesImage}
							alt='Kenapa harus mencari tallent di peworld'
							width='496'
							height='390'
						/>
						<div className='absolute w-[90px] aspect-square bg-primary-purple -top-9 -left-9' />
						<div className='absolute -bottom-4 -left-7 rotate-90'>
							<svg
								width='73'
								height='127'
								viewBox='0 0 73 127'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M1.85339 3.66771C2.8662 3.66771 3.68724 2.84666 3.68724 1.83385C3.68724 0.821045 2.8662 0 1.85339 0C0.840579 0 0.019534 0.821045 0.019534 1.83385C0.019534 2.84666 0.840579 3.66771 1.85339 3.66771ZM1.85339 38.7285C2.8662 38.7285 3.68724 37.9075 3.68724 36.8947C3.68724 35.8819 2.8662 35.0608 1.85339 35.0608C0.840576 35.0608 0.0195312 35.8819 0.0195312 36.8947C0.0195312 37.9075 0.840576 38.7285 1.85339 38.7285ZM1.85339 108.85C2.8662 108.85 3.68724 108.029 3.68724 107.016C3.68724 106.004 2.8662 105.182 1.85339 105.182C0.840576 105.182 0.0195312 106.004 0.0195312 107.016C0.0195312 108.029 0.840576 108.85 1.85339 108.85ZM3.68724 71.9555C3.68724 72.9683 2.8662 73.7894 1.85339 73.7894C0.840576 73.7894 0.0195312 72.9683 0.0195312 71.9555C0.0195312 70.9427 0.840576 70.1217 1.85339 70.1217C2.8662 70.1217 3.68724 70.9427 3.68724 71.9555ZM3.68724 124.547C3.68724 125.56 2.8662 126.381 1.85339 126.381C0.840576 126.381 0.0195312 125.56 0.0195312 124.547C0.0195312 123.534 0.840576 122.713 1.85339 122.713C2.8662 122.713 3.68724 123.534 3.68724 124.547ZM1.85339 56.259C2.8662 56.259 3.68724 55.4379 3.68724 54.4251C3.68724 53.4123 2.8662 52.5912 1.85339 52.5912C0.840576 52.5912 0.0195312 53.4123 0.0195312 54.4251C0.0195312 55.4379 0.840576 56.259 1.85339 56.259ZM3.68724 89.4859C3.68724 90.4987 2.8662 91.3198 1.85339 91.3198C0.840576 91.3198 0.0195312 90.4987 0.0195312 89.4859C0.0195312 88.4731 0.840576 87.6521 1.85339 87.6521C2.8662 87.6521 3.68724 88.4731 3.68724 89.4859ZM1.85339 21.1981C2.8662 21.1981 3.68724 20.3771 3.68724 19.3643C3.68724 18.3515 2.8662 17.5304 1.85339 17.5304C0.840576 17.5304 0.0195312 18.3515 0.0195312 19.3643C0.0195312 20.3771 0.840576 21.1981 1.85339 21.1981ZM45.2754 107.016C45.2754 108.029 44.4543 108.85 43.4415 108.85C42.4287 108.85 41.6076 108.029 41.6076 107.016C41.6076 106.004 42.4287 105.182 43.4415 105.182C44.4543 105.182 45.2754 106.004 45.2754 107.016ZM43.4415 38.7285C44.4543 38.7285 45.2754 37.9075 45.2754 36.8947C45.2754 35.8819 44.4543 35.0608 43.4415 35.0608C42.4287 35.0608 41.6076 35.8819 41.6076 36.8947C41.6076 37.9075 42.4287 38.7285 43.4415 38.7285ZM45.2754 71.9555C45.2754 72.9683 44.4543 73.7894 43.4415 73.7894C42.4287 73.7894 41.6076 72.9683 41.6076 71.9555C41.6076 70.9427 42.4287 70.1217 43.4415 70.1217C44.4543 70.1217 45.2754 70.9427 45.2754 71.9555ZM43.4415 3.66771C44.4543 3.66771 45.2754 2.84666 45.2754 1.83385C45.2754 0.821045 44.4543 0 43.4415 0C42.4287 0 41.6076 0.821045 41.6076 1.83385C41.6076 2.84666 42.4287 3.66771 43.4415 3.66771ZM45.2754 124.547C45.2754 125.56 44.4543 126.381 43.4415 126.381C42.4287 126.381 41.6076 125.56 41.6076 124.547C41.6076 123.534 42.4287 122.713 43.4415 122.713C44.4543 122.713 45.2754 123.534 45.2754 124.547ZM43.4415 56.259C44.4543 56.259 45.2754 55.4379 45.2754 54.4251C45.2754 53.4123 44.4543 52.5912 43.4415 52.5912C42.4287 52.5912 41.6076 53.4123 41.6076 54.4251C41.6076 55.4379 42.4287 56.259 43.4415 56.259ZM45.2754 89.4859C45.2754 90.4987 44.4543 91.3198 43.4415 91.3198C42.4287 91.3198 41.6076 90.4987 41.6076 89.4859C41.6076 88.4731 42.4287 87.6521 43.4415 87.6521C44.4543 87.6521 45.2754 88.4731 45.2754 89.4859ZM43.4415 21.1981C44.4543 21.1981 45.2754 20.3771 45.2754 19.3643C45.2754 18.3515 44.4543 17.5304 43.4415 17.5304C42.4287 17.5304 41.6076 18.3515 41.6076 19.3643C41.6076 20.3771 42.4287 21.1981 43.4415 21.1981ZM17.5499 107.016C17.5499 108.029 16.7289 108.85 15.7161 108.85C14.7033 108.85 13.8822 108.029 13.8822 107.016C13.8822 106.004 14.7033 105.182 15.7161 105.182C16.7289 105.182 17.5499 106.004 17.5499 107.016ZM15.7161 38.7285C16.7289 38.7285 17.5499 37.9075 17.5499 36.8947C17.5499 35.8819 16.7289 35.0608 15.7161 35.0608C14.7033 35.0608 13.8822 35.8819 13.8822 36.8947C13.8822 37.9075 14.7033 38.7285 15.7161 38.7285ZM17.5499 71.9555C17.5499 72.9683 16.7289 73.7894 15.7161 73.7894C14.7033 73.7894 13.8822 72.9683 13.8822 71.9555C13.8822 70.9427 14.7033 70.1217 15.7161 70.1217C16.7289 70.1217 17.5499 70.9427 17.5499 71.9555ZM15.7161 3.66771C16.7289 3.66771 17.5499 2.84666 17.5499 1.83385C17.5499 0.821045 16.7289 0 15.7161 0C14.7033 0 13.8822 0.821045 13.8822 1.83385C13.8822 2.84666 14.7033 3.66771 15.7161 3.66771ZM17.5499 124.547C17.5499 125.56 16.7289 126.381 15.7161 126.381C14.7033 126.381 13.8822 125.56 13.8822 124.547C13.8822 123.534 14.7033 122.713 15.7161 122.713C16.7289 122.713 17.5499 123.534 17.5499 124.547ZM15.7161 56.259C16.7289 56.259 17.5499 55.4379 17.5499 54.4251C17.5499 53.4123 16.7289 52.5912 15.7161 52.5912C14.7033 52.5912 13.8822 53.4123 13.8822 54.4251C13.8822 55.4379 14.7033 56.259 15.7161 56.259ZM17.5499 89.4859C17.5499 90.4987 16.7289 91.3198 15.7161 91.3198C14.7033 91.3198 13.8822 90.4987 13.8822 89.4859C13.8822 88.4731 14.7033 87.6521 15.7161 87.6521C16.7289 87.6521 17.5499 88.4731 17.5499 89.4859ZM15.7161 21.1981C16.7289 21.1981 17.5499 20.3771 17.5499 19.3643C17.5499 18.3515 16.7289 17.5304 15.7161 17.5304C14.7033 17.5304 13.8822 18.3515 13.8822 19.3643C13.8822 20.3771 14.7033 21.1981 15.7161 21.1981ZM59.1381 107.016C59.1381 108.029 58.317 108.85 57.3042 108.85C56.2914 108.85 55.4704 108.029 55.4704 107.016C55.4704 106.004 56.2914 105.182 57.3042 105.182C58.317 105.182 59.1381 106.004 59.1381 107.016ZM57.3042 38.7285C58.317 38.7285 59.1381 37.9075 59.1381 36.8947C59.1381 35.8819 58.317 35.0608 57.3042 35.0608C56.2914 35.0608 55.4704 35.8819 55.4704 36.8947C55.4704 37.9075 56.2914 38.7285 57.3042 38.7285ZM59.1381 71.9555C59.1381 72.9683 58.317 73.7894 57.3042 73.7894C56.2914 73.7894 55.4704 72.9683 55.4704 71.9555C55.4704 70.9427 56.2914 70.1217 57.3042 70.1217C58.317 70.1217 59.1381 70.9427 59.1381 71.9555ZM57.3042 3.66771C58.317 3.66771 59.1381 2.84666 59.1381 1.83385C59.1381 0.821045 58.317 0 57.3042 0C56.2914 0 55.4704 0.821045 55.4704 1.83385C55.4704 2.84666 56.2914 3.66771 57.3042 3.66771ZM59.1381 124.547C59.1381 125.56 58.317 126.381 57.3042 126.381C56.2914 126.381 55.4704 125.56 55.4704 124.547C55.4704 123.534 56.2914 122.713 57.3042 122.713C58.317 122.713 59.1381 123.534 59.1381 124.547ZM57.3042 56.259C58.317 56.259 59.1381 55.4379 59.1381 54.4251C59.1381 53.4123 58.317 52.5912 57.3042 52.5912C56.2914 52.5912 55.4704 53.4123 55.4704 54.4251C55.4704 55.4379 56.2914 56.259 57.3042 56.259ZM59.1381 89.4859C59.1381 90.4987 58.317 91.3198 57.3042 91.3198C56.2914 91.3198 55.4704 90.4987 55.4704 89.4859C55.4704 88.4731 56.2914 87.6521 57.3042 87.6521C58.317 87.6521 59.1381 88.4731 59.1381 89.4859ZM57.3042 21.1981C58.317 21.1981 59.1381 20.3771 59.1381 19.3643C59.1381 18.3515 58.317 17.5304 57.3042 17.5304C56.2914 17.5304 55.4704 18.3515 55.4704 19.3643C55.4704 20.3771 56.2914 21.1981 57.3042 21.1981ZM31.4126 107.016C31.4126 108.029 30.5916 108.85 29.5788 108.85C28.566 108.85 27.7449 108.029 27.7449 107.016C27.7449 106.004 28.566 105.182 29.5788 105.182C30.5916 105.182 31.4126 106.004 31.4126 107.016ZM29.5788 38.7285C30.5916 38.7285 31.4126 37.9075 31.4126 36.8947C31.4126 35.8819 30.5916 35.0608 29.5788 35.0608C28.566 35.0608 27.7449 35.8819 27.7449 36.8947C27.7449 37.9075 28.566 38.7285 29.5788 38.7285ZM31.4126 71.9555C31.4126 72.9683 30.5916 73.7894 29.5788 73.7894C28.566 73.7894 27.7449 72.9683 27.7449 71.9555C27.7449 70.9427 28.566 70.1217 29.5788 70.1217C30.5916 70.1217 31.4126 70.9427 31.4126 71.9555ZM29.5788 3.66771C30.5916 3.66771 31.4126 2.84666 31.4126 1.83385C31.4126 0.821045 30.5916 0 29.5788 0C28.566 0 27.7449 0.821045 27.7449 1.83385C27.7449 2.84666 28.566 3.66771 29.5788 3.66771ZM31.4126 124.547C31.4126 125.56 30.5916 126.381 29.5788 126.381C28.566 126.381 27.7449 125.56 27.7449 124.547C27.7449 123.534 28.566 122.713 29.5788 122.713C30.5916 122.713 31.4126 123.534 31.4126 124.547ZM29.5788 56.259C30.5916 56.259 31.4126 55.4379 31.4126 54.4251C31.4126 53.4123 30.5916 52.5912 29.5788 52.5912C28.566 52.5912 27.7449 53.4123 27.7449 54.4251C27.7449 55.4379 28.566 56.259 29.5788 56.259ZM31.4126 89.4859C31.4126 90.4987 30.5916 91.3198 29.5788 91.3198C28.566 91.3198 27.7449 90.4987 27.7449 89.4859C27.7449 88.4731 28.566 87.6521 29.5788 87.6521C30.5916 87.6521 31.4126 88.4731 31.4126 89.4859ZM29.5788 21.1981C30.5916 21.1981 31.4126 20.3771 31.4126 19.3643C31.4126 18.3515 30.5916 17.5304 29.5788 17.5304C28.566 17.5304 27.7449 18.3515 27.7449 19.3643C27.7449 20.3771 28.566 21.1981 29.5788 21.1981ZM73.0008 107.016C73.0008 108.029 72.1797 108.85 71.1669 108.85C70.1541 108.85 69.3331 108.029 69.3331 107.016C69.3331 106.004 70.1541 105.182 71.1669 105.182C72.1797 105.182 73.0008 106.004 73.0008 107.016ZM71.1669 38.7285C72.1797 38.7285 73.0008 37.9075 73.0008 36.8947C73.0008 35.8819 72.1797 35.0608 71.1669 35.0608C70.1541 35.0608 69.3331 35.8819 69.3331 36.8947C69.3331 37.9075 70.1541 38.7285 71.1669 38.7285ZM73.0008 71.9555C73.0008 72.9683 72.1797 73.7894 71.1669 73.7894C70.1541 73.7894 69.3331 72.9683 69.3331 71.9555C69.3331 70.9427 70.1541 70.1217 71.1669 70.1217C72.1797 70.1217 73.0008 70.9427 73.0008 71.9555ZM71.1669 3.66771C72.1797 3.66771 73.0008 2.84666 73.0008 1.83385C73.0008 0.821045 72.1797 0 71.1669 0C70.1541 0 69.3331 0.821045 69.3331 1.83385C69.3331 2.84666 70.1541 3.66771 71.1669 3.66771ZM73.0008 124.547C73.0008 125.56 72.1797 126.381 71.1669 126.381C70.1541 126.381 69.3331 125.56 69.3331 124.547C69.3331 123.534 70.1541 122.713 71.1669 122.713C72.1797 122.713 73.0008 123.534 73.0008 124.547ZM71.1669 56.259C72.1797 56.259 73.0008 55.4379 73.0008 54.4251C73.0008 53.4123 72.1797 52.5912 71.1669 52.5912C70.1541 52.5912 69.3331 53.4123 69.3331 54.4251C69.3331 55.4379 70.1541 56.259 71.1669 56.259ZM73.0008 89.4859C73.0008 90.4987 72.1797 91.3198 71.1669 91.3198C70.1541 91.3198 69.3331 90.4987 69.3331 89.4859C69.3331 88.4731 70.1541 87.6521 71.1669 87.6521C72.1797 87.6521 73.0008 88.4731 73.0008 89.4859ZM71.1669 21.1981C72.1797 21.1981 73.0008 20.3771 73.0008 19.3643C73.0008 18.3515 72.1797 17.5304 71.1669 17.5304C70.1541 17.5304 69.3331 18.3515 69.3331 19.3643C69.3331 20.3771 70.1541 21.1981 71.1669 21.1981Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='flex-1'>
					<h2 className='text-4xl text-yankees-blue font-semibold mb-9'>
						Kenapa harus mencari tallent di peworld
					</h2>
					<ul className='grid gap-7'>
						<li className='flex items-center gap-6'>
							<TickIcon />
							<span>Lorem ipsum dolor sit amet.</span>
						</li>
						<li className='flex items-center gap-6'>
							<TickIcon />
							<span>Lorem ipsum dolor sit amet.</span>
						</li>
						<li className='flex items-center gap-6'>
							<TickIcon />
							<span>Lorem ipsum dolor sit amet.</span>
						</li>
						<li className='flex items-center gap-6'>
							<TickIcon />
							<span>Lorem ipsum dolor sit amet.</span>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}
