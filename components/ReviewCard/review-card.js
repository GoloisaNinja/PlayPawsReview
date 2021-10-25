import { useTmdbApi } from '../../api/tmdb/tmdb-functions';
import Image from 'next/image';
import Button from '../Button/button';
import styles from './review-card.module.scss';

function ReviewCard({ type, id, preview_text, reviewed_on }) {
	const { isLoading, details } = useTmdbApi(type, id);
	const baseImageURL = `https://image.tmdb.org/t/p/original`;
	return isLoading ? (
		<div>...Loading</div>
	) : (
		<div className={styles.container}>
			<h3 className={styles.title}>{details.title}</h3>
			<div className={styles.flexRow}>
				<Image
					className={styles.poster}
					src={`${baseImageURL}${details.poster_path}`}
					width={120}
					height={180}
					alt={`movie poster for ${details.title}`}
				/>
				<div className={styles.preview_container}>
					<h5 className={styles.text}>{preview_text}</h5>
				</div>
			</div>
			<h5 className={styles.date}>{`reviewed on ${reviewed_on}`}</h5>
			<div className={styles.button_container}>
				<Button link='/' primary={true}>
					See full review
				</Button>
			</div>
		</div>
	);
}
export default ReviewCard;
