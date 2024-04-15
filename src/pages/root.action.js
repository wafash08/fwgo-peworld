import { redirect } from 'react-router-dom';
import { authProvider } from '../auth';

export async function action() {
	await authProvider.signout();
	return redirect('/');
}
