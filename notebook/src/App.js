import { useState } from "react";

export default function App() {
	const [notes, setNotes] = useState([]);

	return (
		<div>
			<Heading>
				<h1>📝NOTEBOOK</h1>
				<SearchBar notes={notes} />
				<NumResult notes={notes} />
			</Heading>

			<Main>
				<DisplayUI>
					<NoteList setNotes={setNotes} notes={notes} />
				</DisplayUI>

				<Actions setNotes={setNotes} />
			</Main>
		</div>
	);
}

function NumResult({ notes }) {
	const totalNotes = notes.length;
	return <h3 className="numresult">Found {totalNotes} Notes</h3>;
}

function SearchBar({ notes }) {
	const [searchInp, setSearchInp] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!searchInp) return;
	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				className="search-input"
				type="text"
				value={searchInp}
				onChange={(e) => setSearchInp(e.target.value)}
				placeholder="search note..."
			/>
			<Button>🔍</Button>
		</form>
	);
}

function Heading({ children }) {
	return <header>{children}</header>;
}

function Main({ children }) {
	return <main>{children}</main>;
}

function DisplayUI({ children }) {
	return <div className="display">{children}</div>;
}

function NoteList({ notes, setNotes }) {
	return (
		<ul className="note-list container">
			{notes.length === 0 ? (
				<h2 style={{ textAlign: "center" }}>Add Notes to display here!!!</h2>
			) : (
				notes.map((note) => <Note setNotes={setNotes} note={note} key={note.id} />)
			)}
		</ul>
	);
}

function Note({ note, setNotes }) {
	const [showSummary, setShowSummary] = useState(false);

	function handleDelete() {
		window.confirm(`Do you want to delete this note : ${note.title} ?`) &&
			setNotes((notes) => notes.filter((cur) => cur.id !== note.id));
	}

	return (
		<li className="note">
			<div className="note-element">
				<div className="note-element__btn">
					<Button
						className="note-btn view"
						onClick={() => setShowSummary((show) => !show)}
					>
						{showSummary ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="32px"
								viewBox="0 -960 960 960"
								width="32px"
								fill="#000"
							>
								<path d="m357-384 123-123 123 123 57-56-180-180-180 180 57 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="32px"
								viewBox="0 -960 960 960"
								width="32px"
								fill="#000"
							>
								<path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
							</svg>
						)}
					</Button>
				</div>

				<div className="note-element__info">
					<h1>{note.title}</h1>
				</div>

				<div className="note-element__btn">
					<Button className="note-btn del" onClick={handleDelete}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="32px"
							viewBox="0 -960 960 960"
							width="32px"
							fill="#000"
						>
							<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
						</svg>
					</Button>
				</div>
			</div>

			{showSummary && <p>{note.summary}</p>}
		</li>
	);
}

function Actions({ setNotes }) {
	const [showAddNote, setShowAddNote] = useState(false);

	return (
		<div className="actions">
			{showAddNote ? (
				<>
					<FormAddNote setNotes={setNotes} setShowAddNote={setShowAddNote} />
					<Button
						className="btn action-btn"
						onClick={() => setShowAddNote((show) => !show)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="36px"
							viewBox="0 -960 960 960"
							width="36px"
							fill="#ff3217"
						>
							<path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
					</Button>
				</>
			) : (
				<Button
					className="btn action-btn"
					onClick={() => setShowAddNote((show) => !show)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="36px"
						viewBox="0 -960 960 960"
						width="36px"
						fill="#09ff00"
					>
						<path d="M448.67-280h66.66v-164H680v-66.67H515.33V-680h-66.66v169.33H280V-444h168.67v164Zm31.51 200q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
					</svg>
				</Button>
			)}
		</div>
	);
}

function FormAddNote({ setNotes, setShowAddNote }) {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!title || !summary) return;

		const newNotes = {
			title,
			summary,
			id: crypto.randomUUID(),
		};

		setNotes((note) => [...note, newNotes]);
		setShowAddNote(false);
	}

	return (
		<form className="form-add-note" onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				className="text"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<div>
				<label>Summary</label>
				<textarea
					rows={10}
					className="textarea"
					type="text"
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				/>
			</div>

			<Button className="btn addnotes-btn">ADD</Button>
		</form>
	);
}

function Button({ className = "", children, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}
