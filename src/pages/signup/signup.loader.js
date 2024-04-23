import { redirect } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../utils';

export async function loader() {
	const token = getTokenFromLocalStorage();
	if (token) {
		return redirect('/');
	}
	return null;
}
