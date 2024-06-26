import { formatDate } from '../../utils';
import emptyAvatar from '../../assets/empty-avatar.webp';

export default function NotificationItem({ notification, role }) {
	const {
		recruiter_photo,
		recruiter_name,
		worker_name,
		message_purpose,
		created_at,
		worker_photo,
	} = notification;
	const photo = role === 'recruiter' ? worker_photo : recruiter_photo;
	const altText = role === 'recruiter' ? worker_name : recruiter_name;

	let message = null;
	if (role === 'recruiter') {
		message = (
			<p className='text-gray-900'>
				You've sent offering for {message_purpose} to{' '}
				<span className='font-semibold'>{worker_name}</span>
			</p>
		);
	} else if (role === 'worker') {
		message = (
			<p className='text-gray-900'>
				You've received offering for {message_purpose} from{' '}
				<span className='font-semibold'>{recruiter_name}</span>
			</p>
		);
	}

	return (
		<li className='border-b border-b-azureish-white last:border-b-0 p-6 w-full text-gray-900 bg-white flex gap-4 flex-row justify-between items-center'>
			<div className='flex items-center'>
				<div className='relative inline-block shrink-0'>
					<img
						className='w-12 h-12 rounded-full object-cover'
						src={photo ? photo : emptyAvatar}
						alt={altText}
					/>
				</div>
				<div className='ms-3 text-sm font-normal'>{message}</div>
			</div>
			<div className='shrink-0'>
				<span className='text-xs font-medium text-blue-600 dark:text-blue-500'>
					{formatDate(created_at)}
				</span>
			</div>
		</li>
	);
}
