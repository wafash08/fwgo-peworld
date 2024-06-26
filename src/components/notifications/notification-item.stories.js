import NotificationItem from './notification-item';

export default {
	title: 'Notification/Notification Item',
	component: NotificationItem,
	tags: ['autodocs'],
};

const notification = {
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
};

export const Default = {
	args: {
		notification,
		role: 'recruiter',
	},
};

export const RecruiterNotification = {
	args: {
		notification,
		role: 'recruiter',
	},
};

export const WorkerNotification = {
	args: {
		notification,
		role: 'worker',
	},
};
