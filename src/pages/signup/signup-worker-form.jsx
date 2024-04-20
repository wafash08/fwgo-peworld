import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/input';
import Button from '../../components/button';
import { userSignedUp } from '../../redux/actions/user.actions';

export default function SignupWorker({ role }) {
	const [validationError, setValidationError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const status = useSelector(state => state.user.status);
	const error = useSelector(state => state.user.error);

	const handleSignupWorker = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const role = formData.get('role');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (confirmPassword !== password) {
			setValidationError(
				'Konfirmasi kata sandi tidak sesuai dengan kata sandi'
			);
			return;
		}

		const user = {};
		for (const [key, value] of formData) {
			if (key === 'role' || key === 'confirmPassword') {
				continue;
			}
			user[key] = value;
		}
		try {
			await dispatch(userSignedUp(user, role));
			navigate('/login');
		} catch (error) {
			dispatch({
				type: 'user/userFailed',
				payload: error.message,
			});
		}
	};

	return (
		<form method='post' onSubmit={handleSignupWorker}>
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
		</form>
	);
}
