import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';

export async function loader() {
	const { token } = authProvider.getUser();
	const isAuthenticated = token ? true : false;
	if (isAuthenticated) {
		return redirect('/');
	}
	return null;
}
