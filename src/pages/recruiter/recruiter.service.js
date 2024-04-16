import axios from 'axios';
import { uploadImage } from '../profile/profile.service';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const recruiterUrl = `${baseUrl}/recruiters/profile`;

export async function updateRecruiterProfile(recruiter, token) {
	console.log('recruiter >> ', recruiter);
	const photo = await uploadImage(recruiter.photo);
	recruiter = { ...recruiter, photo };
	const result = await axios.put(recruiterUrl, recruiter, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}
