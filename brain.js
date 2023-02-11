function execute(command) {
	// prepare entered command
	command = command.trim();
	command = command.toLowerCase();

	if (command === "") {
		return;
	}

	// keeping the terminal line from executed command
	let result = document.createElement("div");
	let currCommand = document.getElementById("command-line").cloneNode(true);
	currCommand.id = "old-command";
	currCommand.removeChild(currCommand.lastElementChild);
	result.appendChild(currCommand);

	// calculating result
	switch (command) {
		case "whoami":
			result.innerHTML +=
				"<p class='typing'>Spiritually speaking, we all are spirit soul stuck in this human body, but journey to realise that is so long.</br>But you can start journey with this <a href='https://vedabase.io/en/library/bg/2/13/'>verse</a>.</p>";
			break;
		case "help":
			for (const key in help) {
				result.innerHTML += `<p class="listcommands typing"><span class="command-key">${key}</span> <span>${help[key]}</span></p>`;
			}
			break;
		case "hi":
		case "hello":
			for (const key in socials) {
				result.innerHTML += `<p class="listcommands typing"><span class="command-key">${key}</span> <a href=${socials[key][1]} target="_blank">${socials[key][0]}</a></p>`;
			}
			break;
		case "projects":
			for (const key in projects) {
				result.innerHTML += `<p class="listcommands projects typing"><a href=${projects[key][0]} target="_blank">${key}</a><span>${projects[key][1]}</span></p>`;
			}
			break;
		case "projects":
			result.innerHTML += "<p class='typing'></p>";
			break;
		case "whois":
			result.innerHTML += "<p class='intro'>" + whois + "</p>";
			break;
		case "clear":
			terminal.innerHTML = "";
			return;
		default:
			result.innerHTML += `<p class='error typing'>${command}: Command not found. For a list of commands, type '<span class="command-key">help</span>'.</p>`;
			break;
	}
	terminal.appendChild(result);
	window.scrollTo(0, document.body.scrollHeight);
}
