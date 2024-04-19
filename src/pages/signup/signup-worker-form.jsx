import { Form } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';

export default function SignupWorker({ role, errors }) {
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
					minLength={4}
				>
					{errors?.confirmPassword && (
						<span className='text-sm text-red-500 mt-1'>
							{errors.confirmPassword}
						</span>
					)}
				</Input>
			</div>
			<Button type='submit' fullWidth>
				Daftar
			</Button>
		</Form>
	);
}
