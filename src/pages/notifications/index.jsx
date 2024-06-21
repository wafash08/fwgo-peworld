import Container from '../../components/container';
import emptyAvatar from '../../assets/empty-avatar.webp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notificationsLoaded } from '../../redux/actions/notification.action';
import { formatDate, getTokenFromLocalStorage } from '../../utils';
import { NotificationsSkeleton } from '../../components/skeleton';
import { useNotifications, useRole } from '../../hooks';

export default function NotificationsPage() {
	const dispatch = useDispatch();
	const { notifications, status: notificationsStatus } = useNotifications();
	const token = getTokenFromLocalStorage();
	const role = useRole();

	useEffect(() => {
		dispatch(notificationsLoaded(token));
	}, []);

	let notificationList = null;

	console.log('notification status > ', notificationsStatus);

	if (notificationsStatus === 'loading') {
		notificationList = <NotificationsSkeleton />;
	} else if (notificationsStatus === 'succeed') {
		notificationList = (
			<NotificationList notifications={notifications} role={role} />
		);
	}

	return (
		<section className='my-10'>
			<Container>{notificationList}</Container>
		</section>
	);
}

function NotificationList({ notifications, role }) {
	return (
		<ul className='w-full max-w-3xl mx-auto border border-azureish-white rounded-md overflow-hidden'>
			{notifications.map(
				({
					id,
					created_at,
					worker_photo,
					recruiter_photo,
					recruiter_name,
					worker_name,
					message_purpose,
				}) => {
					return (
						<NotificationItem
							key={id}
							createdAt={created_at}
							messagePurpose={message_purpose}
							photo={role === 'recruiter' ? recruiter_photo : worker_photo}
							recruiter={recruiter_name}
							worker={worker_name}
							role={role}
						/>
					);
				}
			)}
		</ul>
	);
}

function NotificationItem({
	photo,
	recruiter,
	worker,
	messagePurpose,
	createdAt,
	role,
}) {
	let message = null;

	if (role === 'recruiter') {
		message = (
			<p className='text-gray-900'>
				You've sent offering for {messagePurpose} to{' '}
				<span className='font-semibold'>{worker}</span>
			</p>
		);
	} else if (role === 'worker') {
		message = (
			<p className='text-gray-900'>
				You've received offering for {messagePurpose} from{' '}
				<span className='font-semibold'>{recruiter}</span>
			</p>
		);
	}

	return (
		<li className='border-b border-b-azureish-white last:border-b-0 p-6 w-full text-gray-900 bg-white flex gap-4 flex-row justify-between items-center'>
			<div className='flex items-center'>
				<div className='relative inline-block shrink-0'>
					<img
						className='w-12 h-12 rounded-full'
						src={photo ? photo : emptyAvatar}
						alt={recruiter}
					/>
				</div>
				<div className='ms-3 text-sm font-normal'>{message}</div>
			</div>
			<div className='shrink-0'>
				<span className='text-xs font-medium text-blue-600 dark:text-blue-500'>
					{formatDate(createdAt)}
				</span>
			</div>
		</li>
	);
}
