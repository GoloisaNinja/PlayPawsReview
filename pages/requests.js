import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/layout';
import RequestsHero from '../components/RequestsHero/requests-hero';
import RequestMovie from '../components/RequestMovie/request-movie';
import RequestNewsletter from '../components/RequestNewsletter/request-newsletter';
import RequestContact from '../components/RequestContact/request-contact';

function RequestsPage() {
	const router = useRouter();
	const pageSection = router.asPath.match(/#([a-z0-9]+)/gi);
	useEffect(() => {
		if (typeof window !== undefined) {
			if (pageSection !== null) {
				const id = pageSection[0];
				smoothscroll.polyfill();
				const subtractFromY = -55;
				const el = document?.getElementById(id);
				const y =
					el.getBoundingClientRect().top + window.pageYOffset + subtractFromY;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
		}
	}, [pageSection]);
	return (
		<Layout>
			<RequestsHero />
			<RequestMovie />
			<RequestNewsletter />
			<RequestContact />
		</Layout>
	);
}
export default RequestsPage;
