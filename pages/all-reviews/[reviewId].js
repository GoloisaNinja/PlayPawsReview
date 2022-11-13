// import path from 'path';
// const fs = require('fs/promises');
//import fs from 'fs/promises';
import Image from 'next/image';
import Layout from '../../components/Layout/layout';
import teamDetails from '../../data/team_detail.json';
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
				impressions={review.impressions.impressions}
				team={team}
			/>
			<ReviewTemplateMainBottom />
		</Layout>
	);
}
export async function getStaticProps(context) {
	const { params } = context;

	// pairing the TMDB data with the imported review dummy data
	const baseAPIUrl = process.env.NEXT_PUBLIC_BASEAPI_URL;
	const dbResponse = await axios.get(`${baseAPIUrl}/reviews`);
	const reviewArray = dbResponse.data;

	const reviewId = params.reviewId;
	let review = {};
	reviewArray.filter((reviewObj) => {
		if (reviewObj.media_id === reviewId) {
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
	// this fails to build on netlify as netlify can find fs - will switch to import

	// const teamFilePath = path.join(process.cwd(), 'data', 'team_detail.json');
	// const teamData = await fs.readFile(teamFilePath);
	//const data = JSON.parse(teamData);
	const team = teamDetails.team;
	return {
		props: { review, team },
	};
}

export async function getStaticPaths() {
	const baseAPIUrl = process.env.NEXT_PUBLIC_BASEAPI_URL;
	const dbResponse = await axios.get(`${baseAPIUrl}/reviews`);
	const reviewArray = dbResponse.data;

	const pathsWithParams = reviewArray.map((review) => ({
		params: { reviewId: review.media_id },
	}));
	return {
		paths: pathsWithParams,
		fallback: 'blocking',
	};
}

export default ReviewTemplatePage;
