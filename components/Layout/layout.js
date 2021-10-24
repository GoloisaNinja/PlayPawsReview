import Header from '../Header/header';
import styles from './layout.module.scss';

function Layout({ children }) {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<main>{children}</main>
			</div>
		</>
	);
}
export default Layout;
