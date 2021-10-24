import Link from 'next/link';
import styles from './header.module.scss';
import { FaPaw } from 'react-icons/fa';
function Header() {
	return (
		<header className={styles.nav_header}>
			<div className={styles.nav_start}>
				<FaPaw className={styles.icon} />
			</div>
			<div className={styles.nav_end}>
				<Link href='/'>Reviews</Link>
				<Link href='/'>Forum</Link>
				<Link href='/'>Requests</Link>
			</div>
		</header>
	);
}
export default Header;
