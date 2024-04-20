import Input from '../../components/input';
import Button from '../../components/button';
import { useSelector } from 'react-redux';
// {
//   "email": "dodi2@gmail.com",
//   "password": "abcd1234",
//   "name": "dodi purnama",
//   "company": "PT. CDA",
//   "position": "HRD",
//   "phone": "08123123"
// }
export default function SignupRecruiterForm({ role, validationError }) {
	const status = useSelector(state => state.user.status);
	const error = useSelector(state => state.user.error);

	return (
		<>
			<div className='grid gap-8 mb-12'>
				<input type='hidden' id='role' name='role' value={role} readOnly />

				<Input
					label='Nama'
					name='name'
					placeholder='Masukan nama panjang'
					required
				/>
				<Input
					label='Email'
					name='email'
					type='email'
					placeholder='Masukan alamat email'
					required
				/>
				<Input
					label='Perusahaan'
					name='company'
					placeholder='Masukan nama perusahaan'
					required
				/>
				<Input
					label='Jabatan'
					name='position'
					placeholder='Posisi di perusahaan anda'
					required
				/>
				<Input
					label='No handphone'
					name='phone'
					type='tel'
					placeholder='Masukan no handphone'
					required
				/>
				<Input
					label='Kata sandi'
					name='password'
					type='password'
					placeholder='Masukan kata sandi'
					required
					minLength={4}
				/>
				<Input
					label='Konfirmasi kata sandi'
					name='confirmPassword'
					type='password'
					placeholder='Masukan konfirmasi kata sandi'
					required
					minLength={4}
				/>
				{validationError && (
					<span className='text-sm text-red-500 mt-1'>{validationError}</span>
				)}
				{status === 'failed' && (
					<span className='text-sm text-red-500 mt-1'>{error}</span>
				)}
			</div>
			<Button type='submit' fullWidth>
				{status === 'loading' ? (
					<>
						<svg
							width='20'
							height='20'
							fill='currentColor'
							className='mr-2 animate-spin'
							viewBox='0 0 1792 1792'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
						</svg>
						<span>Mendaftar</span>
					</>
				) : (
					'Daftar'
				)}
			</Button>
		</>
	);
}
