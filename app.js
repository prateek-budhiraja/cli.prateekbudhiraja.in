const command = document.getElementById("command");
const terminal = document.getElementById("terminal");
command.focus();

command.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		const para = document.createElement("p");
		const node = document.createTextNode(command.value);
		para.appendChild(node);
		terminal.append(para);
		command.value = "";
	}
});
