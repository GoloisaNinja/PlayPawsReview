import { Fragment } from 'react';
import Image from 'next/image';
import { IoPaw } from 'react-icons/io5';
import styles from './team-card.module.scss';

function TeamCard({ name, image, alt, genres, bio }) {
	return (
		<div className={styles.container}>
			<div className={styles.title_container}>
				<h3>{name}</h3>
			</div>
			<Image
				className={styles.image}
				src={image}
				alt={alt}
				width={280}
				height={280}
			/>
			<div className={styles.card_lower}>
				<h5 className={styles.genre_heading}>Favorite Genres</h5>
				<ul>
					{genres.map((genre) => (
						<Fragment key={Math.random()}>
							<li>
								<IoPaw /> {genre}
							</li>
						</Fragment>
					))}
				</ul>
				<h5 className={styles.bio}>{bio}</h5>
			</div>
		</div>
	);
}
export default TeamCard;
