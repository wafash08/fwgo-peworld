import { NotificationsSkeleton } from '../skeleton';
import NotificationItem from './notification-item';
import emptyStateImage from './empty-state.png';

export default function NotificationList({ notifications, role, status }) {
	if (status === 'loading') {
		return <NotificationsSkeleton />;
	}

	if (notifications.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center gap-5 py-20'>
				<img
					src={emptyStateImage}
					alt='There are no notifications yet'
					width={165}
					height={147}
				/>
				<p>There are no notifications yet</p>
			</div>
		);
	}

	return (
		<ul className='w-full max-w-3xl mx-auto border border-azureish-white rounded-md overflow-hidden'>
			{notifications.map(notification => {
				return (
					<NotificationItem
						key={notification.id}
						notification={notification}
						role={role}
					/>
				);
			})}
		</ul>
	);
}
