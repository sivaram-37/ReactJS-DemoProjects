import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

function Product() {
	return (
		<main>
			<PageNav />
			<section className={styles.product}>
				<img src="/about-us.jpg" alt="about us image" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum
					consectetur dolore consequatur, assumenda atque sed quam odit et iste, ut labore
					eius recusandae saepe voluptatem voluptatibus culpa nobis! Doloremque omnis,
					vitae quo ab quis cum adipisci consequatur eius eaque aut autem excepturi quam
					consequuntur nobis rerum, iure iusto quod sit molestias repellendus,
					voluptatibus nulla illo minima? Inventore fuga placeat porro repudiandae, illum
					ad, quibusdam quaerat iusto perferendis commodi assumenda accusamus laborum
					praesentium reprehenderit a voluptas accusantium nesciunt animi consequuntur
					facere? Voluptate perspiciatis, saepe ad quis quidem incidunt fugit ab ipsum
					iure necessitatibus veniam harum aliquam et nemo laudantium ea?
				</p>
			</section>
		</main>
	);
}

export default Product;
