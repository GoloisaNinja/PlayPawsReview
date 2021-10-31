import Image from 'next/image';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IoPaw } from 'react-icons/io5';
import styles from './review-template-main-top.module.scss';

function ReviewTemplateMainTop({ impressions, team }) {
	return (
		<div className={styles.container}>
			<h3
				className={
					styles.title
				}>{`Let's Paws - and get first impressions!`}</h3>
			<h4 className={styles.subtitle}>
				{`We like to do a quick check in with the dogs before we screen the 
        film to get their first impressions. It's always fun to see if their 
        initial sense about a movie ends up matching up to their final review
        rating!`}
			</h4>
			<div className={styles.impression_grid}>
				{impressions.map((impression) => {
					const teamMember = team.filter((dog) => dog.name === impression.name);
					return (
						<div className={styles.impression_card} key={impression.id}>
							<div className={styles.name_container}>
								<h3>{impression.name}</h3>
							</div>
							<div className={styles.prediction}>
								<Image
									className={styles.card_image}
									src={teamMember[0].image}
									alt={teamMember[0].altImage}
									width={100}
									height={100}
								/>
								<div className={styles.paw_container}>
									<h5>Paw Prediction</h5>
									<div className={styles.paws}>
										{impression.paws.map((paw) => (
											<IoPaw key={Math.random()} />
										))}
									</div>
								</div>
							</div>
							<h5>
								<ImQuotesLeft /> {impression.quote} <ImQuotesRight />
							</h5>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default ReviewTemplateMainTop;
