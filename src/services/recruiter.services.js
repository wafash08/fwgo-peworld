import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const recruiterUrl = `${baseUrl}/recruiters/profile`;

export async function getRecruiterProfile(token) {
	const result = await axios.get(recruiterUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function updateRecruiterProfile(recruiter, token) {
	const photo = await uploadImage(recruiter.photo);
	recruiter = { ...recruiter, photo };
	const result = await axios.put(recruiterUrl, recruiter, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

const uploadUrl = `${baseUrl}/upload`;

export async function uploadImage(image) {
	const result = await axios.post(
		uploadUrl,
		{ file: image },
		{
			headers: {
				'Content-Type':
					'multipart/form-data; boundary=<calculated when request is sent>',
			},
		}
	);
	return result.data.data.file_url;
}
