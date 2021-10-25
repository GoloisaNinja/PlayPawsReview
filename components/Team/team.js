import teamDetails from '../../data/team_detail';
import TeamCard from '../TeamCard/team-card';
import styles from './team.module.scss';

function Team() {
	return (
		<section className={styles.container} id='team'>
			<h3 className={styles.title}>Meet our talented team</h3>
			<h4 className={styles.subtitle}>
				Our expert review team is comprised of Millie and Blueberry. They are
				both classically trained in film studies and extremely passionate about
				food...erm...movies. They have a combined 7 years of experience at
				begging for treatos, and eating multiple dinners.
			</h4>
			<div className={styles.team_container}>
				{teamDetails.map((teamMember) => (
					<TeamCard
						key={teamMember.id}
						name={teamMember.name}
						image={teamMember.image}
						alt={teamMember.altImage}
						genres={teamMember.genres}
						bio={teamMember.bio}
					/>
				))}
			</div>
		</section>
	);
}
export default Team;
