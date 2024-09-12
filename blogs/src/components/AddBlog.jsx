import styles from "./AddBlog.module.css";

function AddBlog() {
	return (
		<form className={styles.addBlog}>
			<textarea
				className={`${styles.title} ${styles.container}`}
				type="text"
				placeholder="Blog Title"
				rows={1}
			/>
			<textarea
				className={`${styles.content} ${styles.container}`}
				type=""
				placeholder="Blog Content"
				rows={1}
			/>
			<button className={styles.btn}>Add Blog</button>
		</form>
	);
}

export default AddBlog;
