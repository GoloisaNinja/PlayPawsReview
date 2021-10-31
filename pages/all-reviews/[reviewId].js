import path from 'path';
import fs from 'fs/promises';
import Image from 'next/image';
import Layout from '../../components/Layout/layout';
import reviewDetails from '../../data/review_detail';
import styles from './[reviewId].module.scss';
import axios from 'axios';
import ReviewTemplateHero from '../../components/ReviewTemplateHero/review-template-hero';
import ReviewTemplateMainTop from '../../components/ReviewTemplateMainTop/review-template-main-top';
import ReviewTemplateMainBottom from '../../components/ReviewTemplateMainBottom/review-template-main-bottom';

function ReviewTemplatePage({ review, team }) {
	const baseImageURL = `https://image.tmdb.org/t/p/original`;
	return (
		<Layout>
			<ReviewTemplateHero
				title={review.tmdbData.title}
				subtitle={review.tmdbData.overview}
			/>
			<div className={styles.backdrop}>
				<Image
					src={`${baseImageURL}${review.tmdbData.backdrop_path}`}
					sizes='100%'
					objectFit='cover'
					layout='fill'
					placeholder='blur'
					blurDataURL={`${baseImageURL}${review.tmdbData.backdrop_path}`}
					alt={`Backdrop image for the movie ${review.tmdbData.title}`}
				/>
			</div>
			<ReviewTemplateMainTop
				impressions={review.first_impressions}
				team={team}
			/>
			<ReviewTemplateMainBottom />
		</Layout>
	);
}
export async function getStaticProps(context) {
	const { params } = context;

	// pairing the TMDB data with the imported review dummy data

	const reviewId = params.reviewId;
	let review = {};
	reviewDetails.filter((reviewObj) => {
		if (reviewObj.media_id.toString() === reviewId) {
			review = reviewObj;
		}
	});
	const baseTMDBURL = `https://api.themoviedb.org/3/movie`;
	const apiKey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
	const response = await axios.get(
		`${baseTMDBURL}/${reviewId}?api_key=${apiKey}&language=en-US`
	);
	review['tmdbData'] = response.data;

	// use filesystem to read the team data and provide a team object with photo and name

	const teamFilePath = path.join(process.cwd(), 'data', 'team_detail.json');
	const teamData = await fs.readFile(teamFilePath);
	const data = JSON.parse(teamData);
	const team = data.team;
	return {
		props: { review, team },
	};
}

export async function getStaticPaths() {
	const pathsWithParams = reviewDetails.map((review) => ({
		params: { reviewId: review.media_id.toString() },
	}));
	return {
		paths: pathsWithParams,
		fallback: 'blocking',
	};
}

export default ReviewTemplatePage;
