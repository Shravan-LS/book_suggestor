import './App.css';
import styles from "./Home.module.css";
import {Link} from "react-router-dom"

function App() {
  
  return (
		<>
		<section className={styles.home}>
			<h1>Find your Favourite Books at one place!</h1>
			<Link className={styles.link_search} to="/books">Search Now</Link>
		</section>

		<section className={styles.section_1}>
			<h2>Our Top Recommendations</h2>
			<div className={styles.recommended}>
				<div className={styles.book}>
					<img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg"/>
					<h4>The Kite Runner</h4>
				</div>
				<div className={styles.book}>
					<img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1479863624i/1618.jpg"/>
					<h4>The Curious Incident of the Dog in the Night-Time</h4>
				</div>
				<div className={styles.book}>
					<img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639384101i/57693427.jpg"/>
					<h4>The Night Shift</h4>
				</div>
				<div className={styles.book}>
					<img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1284431932i/8253037.jpg"/>
					<h4>The Buntline Special</h4>
				</div>
			</div>
		</section>
		<section className={styles.section_2}>
			<h1>"The magic is only in what books say, how they stitched the patches of the universe together into one garment for us"</h1>
			<h2>- Ray Bradbury, Fahrenheit 451</h2>
		</section>
		</>
	);
}

export default App;
