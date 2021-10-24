import Link from 'next/link';
import styles from './button.module.scss';

function Button(props) {
	return (
		<Link href={props.link}>
			<a className={props.primary ? styles.btn_primary : styles.btn_inverse}>
				{props.children}
			</a>
		</Link>
	);
}
export default Button;
