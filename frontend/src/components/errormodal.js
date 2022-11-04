export default function errormodal(setError, response) {
	if (response?.data) return false;
	return (
		<div className="error-modal">
			<span className="error-modal-title">Error: {response.err.code}</span>
			<span className="error-modal-content">{response.err.text}</span>
			<div>
				<button onClick={() => setError(false)}>{"[X]"}</button>
			</div>
		</div>
	);
}
