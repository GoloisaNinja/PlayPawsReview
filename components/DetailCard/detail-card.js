import Button from '../Button/button';
import styles from './detail-card.module.scss';

function DetailCard({ title, details }) {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			<h5 className={styles.details}>{details}</h5>
			<Button link={`/all-reviews`} primary={true}>
				Watch a review
			</Button>
		</div>
	);
}
export default DetailCard;
