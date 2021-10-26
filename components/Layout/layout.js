import Header from '../Header/header';
import Footer from '../Footer/footer';
import styles from './layout.module.scss';

function Layout({ children }) {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
export default Layout;
