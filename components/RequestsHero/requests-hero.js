import styles from './requests-hero.module.scss';

function RequestsHero() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Play <span className={styles.grey_span}>Paws</span>{' '}
				<span className={styles.blue_span}>Requests</span>
			</h1>
			<h3 className={styles.subtitle}>
				{`Your hub for all things requesty! Please just keep in mind that 
				we are a very small team. We ask that you give us at least 48 hours to
				respond to your request or contact form. We really appreciate your understanding
				and tolerance - Millie and Blueberry are easily equivalent to 4 full time jobs afterall!
        `}
			</h3>
		</div>
	);
}
export default RequestsHero;
