document.addEventListener("click", () => {
	textarea.focus();
});

textarea.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		execute(textarea.value);
		textarea.value = "";
		textarea.focus();
		typer.innerText = "";
	} else {
		typer.innerText = textarea.value;
	}
});
