import Layout from '../../components/Layout/layout';
import ReviewHero from '../../components/ReviewHero/reveiw-hero';
import ReviewGrid from '../../components/ReviewGrid/review-grid';
import axios from 'axios';

function AllReviews({ reviews }) {
	console.log(reviews);
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
	const dbResponse = await axios.get(
		`https://paws-backend.herokuapp.com/reviews`
	);
	let reviewArray = dbResponse.data;
	for (let i = 0; i < reviewArray.length; i++) {
		const response = await axios.get(
			`${baseTMDBURL}/${reviewArray[i].media_id}?api_key=${apiKey}&language=en-US`
		);
		reviewArray[i]['tmdbData'] = response.data;
	}
	const reviews = reviewArray;
	return {
		props: { reviews },
	};
}
export default AllReviews;
