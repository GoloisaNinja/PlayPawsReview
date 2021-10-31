import { useState } from 'react';
import Image from 'next/image';
import ActionButton from '../ActionButton/action-button';
import styles from './request-contact.module.scss';

function RequestContact() {
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
		<div className={styles.container} id='#contact'>
			<h3 className={styles.title}>Contact Us</h3>
			<h5 className={styles.subtitle}>
				Mille and Blueberry have a pretty big fan base, so please bear with us
				if we do not get to your contact request right away. We will do our best
				to respond to you within 48 hours! You contacting us is a big deal!
			</h5>
			<div className={styles.form_grid}>
				<div className={styles.grid_image}>
					<Image
						src='/images/contact.jpg'
						alt='an image depicted dozens of movie posters'
						objectFit='cover'
						layout='fill'
					/>
				</div>

				<form className={styles.form}>
					<label className={styles.form_label}>Name</label>
					<input
						className={styles.form_input}
						type='text'
						required
						value={name}
						name='name'
						onChange={(e) => handleChange(e)}
					/>
					<label className={styles.form_label}>Email</label>
					<input
						className={styles.form_input}
						required
						type='email'
						autoComplete='on'
						value={email}
						name='email'
						onChange={(e) => handleChange(e)}
					/>
					<label className={styles.form_label}>What is on your mind?</label>
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
						Contact the Team
					</ActionButton>
				</form>
			</div>
		</div>
	);
}
export default RequestContact;
