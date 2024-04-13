import { Form } from 'react-router-dom';
import Input from '../../components/input';
// {
//   "email": "dodi2@gmail.com",
//   "password": "abcd1234",
//   "name": "dodi purnama",
//   "company": "PT. CDA",
//   "position": "HRD",
//   "phone": "08123123"
// }
export default function SignupRecruiterForm({ role, errors }) {
	return (
		<Form method='post'>
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
					errors={errors}
					children={
						errors?.confirmPassword && (
							<span className='text-sm text-red-500 mt-1'>
								{errors.confirmPassword}
							</span>
						)
					}
					minLength={4}
				/>
			</div>
			<button
				type='submit'
				className='w-full p-4 text-white bg-primary-yellow font-bold rounded'
			>
				Daftar
			</button>
		</Form>
	);
}