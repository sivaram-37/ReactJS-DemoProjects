import { useState } from "react";

export default function App() {
	return (
		<div>
			<Heading />
			<Main />
		</div>
	);
}

function Heading() {
	return (
		<header>
			<h1>Favorite Movies</h1>
		</header>
	);
}

function Main() {
	const [showAddMovieForm, setAddMovieForm] = useState(false);
	const [movies, setMovies] = useState([]);

	return (
		<main>
			<div className="add-movie">
				<h2>Add Your Favorite Movies Here</h2>

				{showAddMovieForm && (
					<FormAddMovie setMovies={setMovies} setAddMovieForm={setAddMovieForm} />
				)}

				<button onClick={() => setAddMovieForm((show) => !show)}>
					{showAddMovieForm ? "CANCEL" : "ADD MOVIE"}
				</button>
			</div>

			<MovieList movies={movies} setMovies={setMovies} />
		</main>
	);
}

function FormAddMovie({ setMovies, setAddMovieForm }) {
	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [rating, setRating] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!title || !imageUrl || !rating || rating > 5) {
			alert("Please provide all details and give Rating for 5 star");
			return;
		}

		const newMovie = {
			title,
			imageUrl,
			rating,
		};

		setMovies((movies) => [...movies, newMovie]);
		setAddMovieForm(false);
	}

	return (
		<form className="card" onSubmit={handleSubmit}>
			<label>Movie Title</label>
			<input
				type="text"
				placeholder="Movie"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label>Image URL</label>
			<input
				type="text"
				placeholder="Movie Poster url"
				value={imageUrl}
				onChange={(e) => setImageUrl(e.target.value)}
			/>

			<label>Rating</label>
			<input
				type="text"
				placeholder="Your rating for 5"
				value={rating}
				onChange={(e) => setRating(e.target.value)}
			/>

			<button>ADD</button>
		</form>
	);
}

function MovieList({ movies, setMovies }) {
	const initialMovies = movies;
	return (
		<ul className="movie-list">
			{initialMovies.map((movie) => (
				<Movie movie={movie} setMovies={setMovies} key={movie.title} />
			))}
		</ul>
	);
}

function Movie({ movie, setMovies }) {
	function handleDelete(curMovie) {
		const del = window.confirm("Are You Sure You Want to Delete?");
		if (del)
			return setMovies((movies) =>
				movies.filter((movie) => movie.title !== curMovie.title)
			);
	}

	return (
		<li className="movie-element">
			<div className="movie-element__image">
				<img src={movie.imageUrl} alt={movie.title} />
			</div>
			<div className="movie-element__info">
				<h2>{movie.title}</h2>
				<p>{movie.rating}/5</p>
			</div>
			<div className="movie-element__del">
				<DeleteButton onDelete={() => handleDelete(movie)} />
			</div>
		</li>
	);
}

function DeleteButton({ onDelete }) {
	return (
		<button onClick={onDelete}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="38px"
				viewBox="0 -960 960 960"
				width="38px"
				fill="#000"
			>
				<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
			</svg>
		</button>
	);
}
