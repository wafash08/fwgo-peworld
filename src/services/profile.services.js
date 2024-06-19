import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === profile services ===
const profileUrl = `${baseUrl}/workers/profile`;
export async function getProfile(token) {
	const result = await axios.get(profileUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

export async function updateProfile(biodata, token) {
	const result = await axios.put(profileUrl, biodata, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

const photoProfileUrl = `${baseUrl}/workers/profile/photo`;
export async function updatePhotoProfile(photo, token) {
	const result = await axios.put(photoProfileUrl, photo, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type':
				'multipart/form-data; boundary=<calculated when request is sent>',
		},
	});
	return result.data.data;
}
