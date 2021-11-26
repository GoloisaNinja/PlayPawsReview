import Image from 'next/image';
import Button from '../Button/button';
import styles from './review-card.module.scss';

function ReviewCard({ tmdb, preview_text, reviewed_on }) {
	const baseImageURL = `https://image.tmdb.org/t/p/original`;
	const now = Date.now();
	const reviewedOnArray = reviewed_on.split('-');
	const formattedReviewedOn = new Date(
		parseInt(reviewedOnArray[0]),
		parseInt(reviewedOnArray[1] - 1),
		parseInt(reviewedOnArray[2])
	);
	const elapsedDays = Math.round((now - formattedReviewedOn) / 1000 / 86400);
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{tmdb.title}</h3>
			<div className={styles.flexRow}>
				<Image
					className={styles.poster}
					src={`${baseImageURL}${tmdb.poster_path}`}
					width={120}
					height={180}
					alt={`movie poster for ${tmdb.title}`}
				/>
				<div className={styles.preview_container}>
					<h5 className={styles.preview_text}>{preview_text}</h5>
				</div>
			</div>
			<h5 className={styles.date}>
				reviewed{' '}
				{reviewed_on === `9999-01-01` ? (
					<span className={styles.coming_soon}>COMING SOON</span>
				) : (
					<>
						<span className={styles.days}>{elapsedDays}</span>
						{` `}days ago
					</>
				)}
			</h5>
			<div className={styles.button_container}>
				<Button link={`/all-reviews/${tmdb.id}`} primary={true}>
					See full review
				</Button>
			</div>
		</div>
	);
}
export default ReviewCard;
