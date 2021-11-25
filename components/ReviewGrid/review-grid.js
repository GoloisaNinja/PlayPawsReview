import ReviewCard from '../ReviewCard/review-card';
import styles from './review-grid.module.scss';

function ReviewGrid({ reviews }) {
	return (
		<div className={styles.grid}>
			{reviews.map((review) => (
				<ReviewCard
					key={review.id}
					tmdb={review.tmdbData}
					preview_text={review.preview_text}
					reviewed_on={review.reviewed_on}
				/>
			))}
		</div>
	);
}
export default ReviewGrid;
