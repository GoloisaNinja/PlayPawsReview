import Link from 'next/link';
import Layout from '../components/Layout/layout';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Team from '../components/Team/team';

export default function Landing() {
	return (
		<Layout>
			<Hero />
			<About />
			<Team />
		</Layout>
	);
}
