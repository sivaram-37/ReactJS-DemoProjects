import AddBlog from "../components/AddBlog";
import AppNav from "../components/AppNav";
// import styles from "./AppLayout.module.css";

function AppLayout() {
	return (
		<div>
			<AppNav />
			<AddBlog />
			{/* <DisplayBlogs /> */}
		</div>
	);
}

export default AppLayout;
