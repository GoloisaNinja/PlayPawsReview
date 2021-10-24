import { useRouter } from 'next/router';

const EventTemplate = () => {
	const router = useRouter();
	return (
		<div>
			<h1>{`Event for ${router.query.eventId}`}</h1>
		</div>
	);
};
export default EventTemplate;
