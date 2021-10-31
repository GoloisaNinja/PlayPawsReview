import styles from './action-button.module.scss';

function ActionButton(props) {
	const handleClick = () => {
		if (props.handleClick) {
			props.handleClick();
		}
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
