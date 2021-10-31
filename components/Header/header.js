import Link from 'next/link';
import styles from './header.module.scss';
import { FaPaw } from 'react-icons/fa';

function Header() {
	return (
		<header className={styles.nav_header}>
			<div className={styles.nav_start}>
				<Link href='/'>
					<a>
						<FaPaw className={styles.icon} />
					</a>
				</Link>
			</div>
			<div className={styles.nav_end}>
				<Link href='/all-reviews'>Reviews</Link>
				<Link href='/requests'>Requests</Link>
			</div>
		</header>
	);
}
export default Header;
