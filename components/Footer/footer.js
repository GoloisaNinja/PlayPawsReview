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
					<p>Reviews</p>
					<p>Forum</p>
					<p>Join Newsletter</p>
				</div>
				<div className={styles.links}>
					<h4 className={styles.title}>Contact</h4>
					<p>Request Review</p>
					<p>Contact Us</p>
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
