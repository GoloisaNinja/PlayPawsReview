import Button from '../Button/button';
import styles from './review-hero.module.scss';

function ReviewHero() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Play <span className={styles.grey_span}>Paws</span>{' '}
				<span className={styles.blue_span}>Reviews</span>
			</h1>
			<h3 className={styles.subtitle}>
				{`Browse our growing collection of reviews! We try to produce 
          new reviews on the regular, but it can be a little sporadic. Sign up for our
          non-spammy newsletter to be alerted when new reviews drop. You can 
          also request a review.
        `}
			</h3>
			<div className={styles.button_group}>
				<Button link='/requests#newsletter' primary={true}>
					Join the newsletter
				</Button>
				<Button link='/requests#movie'>Request a movie review</Button>
			</div>
		</div>
	);
}
export default ReviewHero;
