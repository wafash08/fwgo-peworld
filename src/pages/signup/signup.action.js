import { redirect } from 'react-router-dom';
import { signup } from './signup.service';

export async function action({ request }) {
	const formData = await request.formData();
	let newUser = {};
	for (const [key, value] of formData) {
		if (key === 'confirmPassword') {
			continue;
		}
		newUser[key] = value;
	}
	await signup(newUser);
	return redirect('/login');
}
