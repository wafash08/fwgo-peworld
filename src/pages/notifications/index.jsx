import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/container';
import { NotificationList } from '../../components/notifications';
import { useNotifications, useRole } from '../../hooks';
import { getTokenFromLocalStorage } from '../../utils';
import { notificationsLoaded } from '../../redux/actions/notification.action';

export default function NotificationsPage() {
	const { notifications, status } = useNotifications();
	const dispatch = useDispatch();
	const token = getTokenFromLocalStorage();
	const role = useRole();

	useEffect(() => {
		dispatch(notificationsLoaded(token));
	}, []);

	return (
		<section className='my-10'>
			<Container>
				<NotificationList
					notifications={notifications}
					role={role}
					status={status}
					key='Notification List'
				/>
			</Container>
		</section>
	);
}
