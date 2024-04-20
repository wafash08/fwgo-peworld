import { redirect } from 'react-router-dom';
import { signupRecruiter, signupWorker } from './signup.service';
import { isEmpty } from '../../utils';

export async function action({ request }) {
	const formData = await request.formData();
	const role = formData.get('role');
	const password = formData.get('password');
	const confirmPassword = formData.get('confirmPassword');
	const errors = {};

	if (confirmPassword !== password) {
		errors.confirmPassword =
			'Konfirmasi kata sandi tidak sesuai dengan kata sandi';
	}

	if (Object.keys(errors).length > 0) {
		return errors;
	}

	let newWorker = {};
	let newRecruiter = {};

	switch (role) {
		case 'worker': {
			newWorker = createNewUser(formData);
			break;
		}

		case 'recruiter': {
			newRecruiter = createNewUser(formData);
			break;
		}
	}

	if (!isEmpty(newWorker)) {
		await signupWorker(newWorker);
	} else if (!isEmpty(newRecruiter)) {
		await signupRecruiter(newRecruiter);
	}
	return redirect('/login');
}
