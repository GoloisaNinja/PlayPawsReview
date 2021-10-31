import { useState } from 'react';
import Image from 'next/image';
import ActionButton from '../ActionButton/action-button';
import styles from './request-movie.module.scss';

function RequestMovie() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const { name, email, message } = formData;
	const handleChange = (e) => {
		setFormData({
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault;
	};
	return (
		<div className={styles.container} id='#movie'>
			<h3 className={styles.title}>Request a Movie</h3>
			<h5 className={styles.subtitle}>
				We get a lot of requests and we are a very small team, so please bear
				with us if we do not get to your request right away. We will do our best
				to respond to you quickly! And please, no adult titles - it would be
				awkward for all of us.
			</h5>
			<div className={styles.form_grid}>
				<div className={styles.grid_image}>
					<Image
						src='/images/request.jpg'
						alt='an image depicted dozens of movie posters'
						objectFit='cover'
						layout='fill'
					/>
				</div>

				<form className={styles.form}>
					<label className={styles.form_label}>Name</label>
					<input
						className={styles.form_input}
						required
						type='text'
						value={name}
						name='name'
						onChange={(e) => handleChange(e)}
					/>
					<label className={styles.form_label}>Email</label>
					<input
						className={styles.form_input}
						required
						type='email'
						value={email}
						name='email'
						onChange={(e) => handleChange(e)}
					/>
					<label className={styles.form_label}>Your Request Message</label>
					<textarea
						className={styles.form_area}
						required
						cols='50'
						rows='5'
						value={message}
						name='message'
						maxLength='500'
						autoCorrect='on'
						onChange={(e) => handleChange(e)}
					/>
					<ActionButton primary={true} type='submit'>
						Send your Movie Request
					</ActionButton>
				</form>
			</div>
		</div>
	);
}
export default RequestMovie;
