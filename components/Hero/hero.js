import Button from '../Button/button';
import ActionButton from '../ActionButton/action-button';
import styles from './hero.module.scss';
import smoothscroll from 'smoothscroll-polyfill';

function Hero() {
	const handleTeamScroll = () => {
		smoothscroll.polyfill();
		const target = document?.getElementById('team');
		const subtractFromY = -55;
		const y =
			target.getBoundingClientRect().top + window.pageYOffset + subtractFromY;

		window.scrollTo({ top: y, behavior: 'smooth' });
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Movies will never be the same</h1>
			<h3
				className={
					styles.subtitle
				}>{`More accurately, movie reviews will never be the same. Why can't you trust most movie
       reviews? Because a person reviewed the movie. Why can you trust our movie reviews? Because
        our dogs reviewed the movie.`}</h3>
			<div className={styles.button_group}>
				<ActionButton handleClick={handleTeamScroll}>
					Meet the doggos
				</ActionButton>
				{/* <Button link='/'>Meet the doggos</Button> */}
				<Button link='/'>Request a movie review</Button>
			</div>
		</div>
	);
}
export default Hero;
