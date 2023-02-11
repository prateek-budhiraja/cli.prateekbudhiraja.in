const textarea = document.getElementById("textarea");
const terminal = document.getElementById("terminal");
const typer = document.getElementById("typer");

const help = {
	whois: "Who is Prateek?",
	projects: "List of some of the public projects.",
	hello: "Send me Hi! on my socials. 👋",
	whoami: "Who are you?",
	help: "You already know what it does!",
	clear: "Clear terminal.",
};

const whois = `
<b>Hello 👋, I'm Prateek Budhiraja!</b></br></br>
I'm a fullstack developer, who loves to build web applications and engaging websites like this one.</br>
I always loved computers and everything related to them and that’s how I took my education and career decisions.<br/>
It always fascinates me that with code, how we can program computers to do things for us and in process of doing that we make other people’s lives a little better and that's what drives me.
I prefer to keep learning, continue challenging myself, and do interesting things that matter. While doing that, I am documenting my coding journey on my <a target="_blank" href="https://blog.prateekbudhiraja.in">blog</a>.<br/>
Other than that, I possess a spiritualist mindset which assists me in remaining tranquil and getting through my day with ease.
`;

const projects = {
	projective: [
		"https://github.com/prateek-budhiraja/project-management",
		"A fullstack application made using expressjs and reactjs used to manage projects and tasks 📝",
	],
	myspotify: [
		"https://github.com/prateek-budhiraja/myspotify",
		"Spotify webpage made using spotify API and reactjs 🎧",
	],
	cliportfolio: [
		"https://github.com/prateek-budhiraja/cli.prateekbudhiraja.in",
		"Webpage that looks like a termial and is made using HTML/CSS and Javascript 💻",
	],
	tictaktoe: [
		"https://github.com/prateek-budhiraja/tic-tak-toe",
		"Tic Tak Toe game using react js 🕹️ ",
	],
	more: [
		"https://github.com/prateek-budhiraja/",
		"Checkout more projects on my github 🐈‍⬛",
	],
};

const socials = {
	linkedin: ["linkedin/prateekbud", "https://www.linkedin.com/in/prateekbud/"],
	email: [
		"prateekbudhiraja14@gmail.com",
		"mailto:prateekbudhiraja14@gmail.com?subject=Hola!",
	],
	github: ["github/prateek-budhiraja", "https://github.com/prateek-budhiraja/"],
};

function execute(command) {
	command = command.trim();
	command = command.toLowerCase();

	if (command === "") {
		return;
	}

	var result = document.createElement("div");
	let currCommand = document.getElementById("command-line").cloneNode(true);
	currCommand.id = "old-command";
	currCommand.removeChild(currCommand.lastElementChild);
	result.appendChild(currCommand);
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
