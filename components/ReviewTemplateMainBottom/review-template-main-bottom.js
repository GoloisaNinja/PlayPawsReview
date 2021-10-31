import styles from './review-template-main-bottom.module.scss';

function ReviewTemplateMainBottom() {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{`Our Video Review`}</h3>
			<h4 className={styles.subtitle}>
				{`Click below to watch our video review and find out just what our talented 
        and dedicated team thought of the movie! No matter the rating, this is going to be epic!`}
			</h4>
			<div className={styles.video}>
				<video width='100%' controls>
					<source
						src='https://www.w3schools.com/html/mov_bbb.mp4'
						type='video/mp4'
					/>
					<source
						src='https://www.w3schools.com/html/mov_bbb.ogg'
						type='video/ogg'
					/>
				</video>
			</div>
		</div>
	);
}
export default ReviewTemplateMainBottom;
