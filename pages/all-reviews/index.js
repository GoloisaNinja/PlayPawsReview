import Layout from '../../components/Layout/layout';
import ReviewHero from '../../components/ReviewHero/reveiw-hero';
import ReviewGrid from '../../components/ReviewGrid/review-grid';

function AllReviews() {
	return (
		<Layout>
			<div>
				<ReviewHero />
			</div>
			<div style={{ padding: '10px 20px', margin: '0 auto' }}>
				<ReviewGrid />
			</div>
		</Layout>
	);
}
export default AllReviews;
