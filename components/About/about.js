import details from '../../data/card_detail';
import DetailCard from '../DetailCard/detail-card';
import styles from './about.module.scss';

function About() {
	return (
		<section className={styles.container}>
			<h3 className={styles.title}>Why Play Paws Review?</h3>
			<h4 className={styles.subtitle}>
				My wife and I created PlayPawsReview because of a lack of movie reviews
				done by dogs. Sure, we can look at reviews on that really famous fruit
				site that people sometimes mistake as a vegatable, but you know what? No
				dog reviewers. Zero.
			</h4>
			<div className={styles.detail_container}>
				{details.map((item) => (
					<DetailCard key={item.id} title={item.title} details={item.details} />
				))}
			</div>
		</section>
	);
}
export default About;
