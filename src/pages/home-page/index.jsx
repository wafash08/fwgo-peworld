import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
	return localStorage.getItem('peworld_user');
}

export default function HomePage() {
	const { user } = useLoaderData();
	useEffect(() => {
		console.log(
			'peworld_user from useEffect >> ',
			localStorage.getItem('peworld_user')
		);
	}, []);
	console.log('peworld_user from loader >> ', user);

	return <h1>halaman home</h1>;
}
