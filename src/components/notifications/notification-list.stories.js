import NotificationList from './notification-list';

export default {
	title: 'Notification/Notification List',
	component: NotificationList,
	tags: ['autodocs'],
};

const notificationList = [
	{
		id: '3c0cfbec-f20d-47b9-81cb-7124b5bcc767',
		message_purpose: 'Freelance',
		worker_id: 'd97f8e69-2bed-4280-9bf9-42304b6e368e',
		recruiter_id: '605e760b-547b-40c5-aa52-917272edf5c2',
		name_request_hire: 'Kobbie Mainyes',
		email_request_hire: 'kobbiemainyes@gmail.com',
		phone_request_hire: '084387391739',
		desciption_request_hire:
			'Hi, Ujang United. Kami tertarik untuk merekrut anda',
		created_at: '2024-04-23T20:13:47.071Z',
		updated_at: null,
		worker_name: 'Ujang United',
		worker_phone: '1234567890',
		worker_job_desk: 'Fullstack Web Developer',
		worker_domicile: 'Jakarta',
		worker_workplace: 'Manchester United',
		worker_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713336916/fxhxwebehynoieidwfru.jpg',
		recruiter_name: 'Kobbie Mainyes',
		recruiter_company: 'Manchester United',
		recruiter_position: 'Sporting Director',
		recruiter_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713867201/uhhurqmpnqj2vifk2vva.jpg',
	},
	{
		id: '623946ee-579a-48f2-99d5-bdfbafdc92a9',
		message_purpose: 'Proyek',
		worker_id: 'd97f8e69-2bed-4280-9bf9-42304b6e368e',
		recruiter_id: '605e760b-547b-40c5-aa52-917272edf5c2',
		name_request_hire: 'Kobbie Mainyes',
		email_request_hire: 'kobbiemainyes@gmail.com',
		phone_request_hire: '081234651001',
		desciption_request_hire:
			'Halo, Ujang United, saya tertarik untuk menghire kamu',
		created_at: '2024-04-23T18:39:22.606Z',
		updated_at: null,
		worker_name: 'Ujang United',
		worker_phone: '1234567890',
		worker_job_desk: 'Fullstack Web Developer',
		worker_domicile: 'Jakarta',
		worker_workplace: 'Manchester United',
		worker_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713336916/fxhxwebehynoieidwfru.jpg',
		recruiter_name: 'Kobbie Mainyes',
		recruiter_company: 'Manchester United',
		recruiter_position: 'Sporting Director',
		recruiter_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713867201/uhhurqmpnqj2vifk2vva.jpg',
	},
	{
		id: '0dd0ea1d-5546-45ce-b25f-8de3bb6338cf',
		message_purpose: 'Freelance',
		worker_id: '8990daa4-6774-4b1b-bd96-cfff8d76ca51',
		recruiter_id: '605e760b-547b-40c5-aa52-917272edf5c2',
		name_request_hire: 'Kobbie Mainyes',
		email_request_hire: 'kobbiemainyes@gmail.com',
		phone_request_hire: '089647747278',
		desciption_request_hire: 'Hi, Logan i would like to hire you',
		created_at: '2024-04-24T11:00:17.633Z',
		updated_at: null,
		worker_name: 'Logan Paul',
		worker_phone: '09182939809',
		worker_job_desk: 'Content Creator',
		worker_domicile: 'USA',
		worker_workplace: 'Freelance',
		worker_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713892515/ij4ktgzmnrsrudsivrwr.jpg',
		recruiter_name: 'Kobbie Mainyes',
		recruiter_company: 'Manchester United',
		recruiter_position: 'Sporting Director',
		recruiter_photo:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1713867201/uhhurqmpnqj2vifk2vva.jpg',
	},
];

export const Default = {
	args: {
		notifications: notificationList,
		role: 'recruiter',
		status: 'succeed',
	},
};

export const EmptyState = {
	args: {
		...Default.args,
		notifications: [],
	},
};

export const LoadingState = {
	args: {
		...Default.args,
		notifications: [],
		status: 'loading',
	},
};
