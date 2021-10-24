import Link from 'next/link';

const AllEvents = () => {
	return (
		<div>
			<h1>All Events Page</h1>
			<ul>
				<li>
					<Link href='/events/coffee'>Coffee Meetup</Link>
				</li>
			</ul>
		</div>
	);
};
export default AllEvents;
