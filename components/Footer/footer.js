import Link from 'next/link';
import {
	TiSocialFacebookCircular,
	TiSocialInstagram,
	TiSocialTwitter,
} from 'react-icons/ti';
import { MdOutlineCopyright } from 'react-icons/md';
import { FaPaw } from 'react-icons/fa';
import styles from './footer.module.scss';

function Footer() {
	const date = new Date();
	const currentDate = date.getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.grid_container}>
				<div className={styles.links}>
					<h4 className={styles.title}>General</h4>
					<Link href='/' passHref={true}>
						<p>Home</p>
					</Link>
					<Link href='/all-reviews' passHref={true}>
						<p>Reviews</p>
					</Link>
					<Link href='/requests' passHref={true}>
						<p>All Requests</p>
					</Link>
				</div>
				<div className={styles.links}>
					<h4 className={styles.title}>Contact</h4>
					<Link href='/requests#movie' passHref={true}>
						<p>Request Review</p>
					</Link>
					<Link href='/requests#newsletter' passHref={true}>
						<p>Join Newsletter</p>
					</Link>
					<Link href='/requests#contact' passHref={true}>
						<p>Contact Us</p>
					</Link>
				</div>
				<div className={styles.links}>
					<h4 className={styles.title}>API</h4>
					<p>Powered by TMDB</p>
					<p>TMDB Documentation</p>
				</div>
				<div className={styles.social}>
					<h4 className={styles.title}>Social</h4>
					<TiSocialFacebookCircular />
					<TiSocialTwitter />
					<TiSocialInstagram />
				</div>
			</div>

			<div className={styles.container}>
				<h3 className={styles.copyright}>
					<FaPaw /> Play Paws Review
				</h3>
				<p>
					Copyright <MdOutlineCopyright /> {currentDate}{' '}
				</p>
			</div>
		</footer>
	);
}
export default Footer;
