import { Fragment } from 'react';
import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './team-card.module.scss';

function TeamCard({ name, image, alt, genres, bio }) {
	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			<Image
				className={styles.image}
				src={image}
				alt={alt}
				width={220}
				height={220}
			/>
			<h5 className={styles.genre_heading}>Favorite Genres</h5>
			<ul>
				{genres.map((genre) => (
					<Fragment key={Math.random()}>
						<AiOutlineStar /> <li>{genre}</li>
					</Fragment>
				))}
			</ul>
			<h5 className={styles.bio}>{bio}</h5>
		</div>
	);
}
export default TeamCard;
