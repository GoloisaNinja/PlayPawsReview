import styles from './action-button.module.scss';

function ActionButton(props) {
	const handleClick = () => {
		props.handleClick();
	};
	return (
		<button
			className={props.primary ? styles.primary : styles.inverse}
			onClick={handleClick}>
			{props.children}
		</button>
	);
}
export default ActionButton;
