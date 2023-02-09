const textarea = document.getElementById("textarea");
const terminal = document.getElementById("terminal");
const typer = document.getElementById("typer");

const help = {
	whois: "Who is Prateek?",
	whoami: "Who are you?",
	projects: "List of some of the public projects.",
	help: "You already know what it does!",
	clear: "Clear terminal.",
};

function execute(command) {
	console.log(command);

	command = command.trim();
	command = command.toLowerCase();
	var result = document.createElement("div");
	let currCommand = document.getElementById("command-line").cloneNode(true);
	currCommand.id = "old-command";
	currCommand.removeChild(currCommand.lastElementChild);
	result.appendChild(currCommand);
	switch (command) {
		case "whoami":
			result.innerHTML +=
				"<p>Spiritually speaking, we all are spirit soul stuck in this hooman body.</p>";
			break;
		case "help":
			for (const key in help) {
				result.innerHTML += `<p class="listcommands"><span>${key}</span> <span>${help[key]}</span></p>`;
			}
			break;
		default:
			result.innerHTML += "<p>wrong command</p>";
			break;
	}
	terminal.appendChild(result);
}

document.addEventListener("click", () => {
	textarea.focus();
});

textarea.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		execute(textarea.value);
		textarea.value = "";
		textarea.focus();
		typer.innerText = "";
	} else if (event.key === " ") {
		typer.innerText += "\u00a0";
	} else if (
		(event.keyCode > 64 && event.keyCode < 91) ||
		(event.keyCode > 96 && event.keyCode < 123)
	) {
		typer.innerText += event.key;
	} else {
		typer.innerText = textarea.value;
	}
});
