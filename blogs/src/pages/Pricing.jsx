import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
	return (
		<div className={styles.pricing}>
			<PageNav />
			<section>
				<div>
					<h1>
						Simple pricing.
						<br />
						Just $9/month.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quod
						tempora enim, quisquam velit veniam! At quaerat nisi aperiam repudiandae.
					</p>
				</div>

				<img className={styles.priceImg} src="/pricingImg.jpg" alt="pricing image" />
			</section>
		</div>
	);
}

export default Pricing;
