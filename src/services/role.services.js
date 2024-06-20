import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const checkRoleUrl = `${baseUrl}/auth/check-role`;

export async function checkRole(token) {
	try {
		const response = await axios.get(checkRoleUrl, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const { role } = response.data.data.data;
		return role;
	} catch (error) {
		throw error;
	}
}
