import { redirect } from 'react-router-dom';
import { login } from './login.service';

export async function action({ request }) {
	const formData = await request.formData();
	const user = Object.fromEntries(formData);
	const loggedInUser = await login(user);
	localStorage.setItem('peworld_user', JSON.stringify(loggedInUser));
	return redirect('/home');
}
