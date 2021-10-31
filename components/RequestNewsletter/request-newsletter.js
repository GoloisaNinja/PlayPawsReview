import { useState } from 'react';
import Image from 'next/image';
import ActionButton from '../ActionButton/action-button';
import styles from './request-newsletter.module.scss';

function RequestNewsletter() {
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
		<div className={styles.container} id='#newsletter'>
			<h3 className={styles.title}>Join our Newsletter</h3>
			<h5 className={styles.subtitle}>
				Want to join our non-spammy newsletter for up-to-date info on the doggos
				and new reviews that might be available? Pawesome! Just give us your
				name and email below - we wont flood your inbox with spam and we do not
				sell your email to ANYONE.
			</h5>
			<div className={styles.form_grid}>
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
					<label className={styles.form_label}>Message (optional)</label>
					<textarea
						className={styles.form_area}
						cols='50'
						rows='5'
						value={message}
						name='message'
						maxLength='500'
						autoCorrect='on'
						onChange={(e) => handleChange(e)}
					/>
					<ActionButton type='submit'>Join our Newsletter</ActionButton>
				</form>
				<div className={styles.grid_image}>
					<Image
						src='/images/newsletter.jpg'
						alt='an image depicted dozens of movie posters'
						objectFit='cover'
						layout='fill'
					/>
				</div>
			</div>
		</div>
	);
}
export default RequestNewsletter;
