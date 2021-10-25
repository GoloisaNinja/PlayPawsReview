import ReviewCard from '../ReviewCard/review-card';
import reviewDetails from '../../data/review_detail';
import styles from './review-grid.module.scss';

function ReviewGrid() {
	return (
		<div className={styles.grid}>
			{reviewDetails.map((review) => (
				<ReviewCard
					key={review.id}
					type={review.media_type}
					id={review.media_id}
					preview_text={review.preview_text}
					reviewed_on={review.reviewed_on_date}
				/>
			))}
		</div>
	);
}
export default ReviewGrid;
