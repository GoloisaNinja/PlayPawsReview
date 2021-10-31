import Layout from '../../components/Layout/layout';
import ReviewHero from '../../components/ReviewHero/reveiw-hero';
import ReviewGrid from '../../components/ReviewGrid/review-grid';
import reviewDetails from '../../data/review_detail';
import axios from 'axios';

function AllReviews({ reviews }) {
	return (
		<Layout>
			<div>
				<ReviewHero />
			</div>
			<div style={{ padding: '10px 20px', margin: '0 auto' }}>
				<ReviewGrid reviews={reviews} />
			</div>
		</Layout>
	);
}
export async function getStaticProps() {
	const baseTMDBURL = `https://api.themoviedb.org/3/movie`;
	const apiKey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
	for (let i = 0; i < reviewDetails.length; i++) {
		const response = await axios.get(
			`${baseTMDBURL}/${reviewDetails[i].media_id}?api_key=${apiKey}&language=en-US`
		);
		reviewDetails[i]['tmdbData'] = response.data;
	}
	const reviews = reviewDetails;
	return {
		props: { reviews },
	};
}
export default AllReviews;
