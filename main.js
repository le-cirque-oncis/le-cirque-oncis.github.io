function submit() {
	const password = document.getElementById("passwordInput").value;
	
	if (password === "") {
		document.getElementById("loginPage").setAttribute("hidden", "true");
		document.getElementById("homePage").removeAttribute("hidden");
	} else {
		document.getElementById("passwordHelpBlock").removeAttribute("hidden");
		document.getElementById("passwordInput").value = "";
		document.getElementById("passwordInput").setAttribute("style", "border: 1px solid #ff3333;");
	}
}