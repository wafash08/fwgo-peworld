import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';

export async function action({ request }) {
	try {
		const formData = await request.formData();
		const user = {};
		for (const [key, value] of formData) {
			if (key === 'redirectTo') {
				continue;
			}
			user[key] = value;
		}
		await authProvider.signin(user);
		let redirectTo = formData.get('redirectTo');
		return redirect(redirectTo || '/');
	} catch (error) {
		console.log(error);
		return { message: error.message };
	}
}
