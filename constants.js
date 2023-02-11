const textarea = document.getElementById("textarea");
const terminal = document.getElementById("terminal");
const typer = document.getElementById("typer");

const help = {
	whois: "Who is Prateek?",
	projects: "List of some of the public projects.",
	hello: "Send me Hi! on my socials. 👋",
	whoami: "Who are you?",
	help: "You already know what it does!",
	clear: "Clears the terminal.",
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
	tictactoe: [
		"https://github.com/prateek-budhiraja/tic-tac-toe",
		"Tic Tac Toe game using react js 🕹️ ",
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
