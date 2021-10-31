import Button from '../Button/button';
import styles from './review-template-hero.module.scss';

function ReviewTemplateHero({ title, subtitle }) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<h3 className={styles.subtitle}>{subtitle}</h3>
			<div className={styles.button_group}>
				<Button link='/all-reviews'>Return to all reviews</Button>
			</div>
		</div>
	);
}
export default ReviewTemplateHero;
