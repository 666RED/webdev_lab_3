const themeToggler = document.querySelector("#theme");
const themeStylesheet = document.querySelector("#theme-stylesheet");
const darkTheme = JSON.parse(localStorage.getItem("pageTheme")) || [];

// for every page load
if (darkTheme.length == 0 || darkTheme.theme) {
	themeStylesheet.href = "/css/dark-theme.css";
} else {
	themeStylesheet.href = "/css/light-theme.css";
}

themeToggler.addEventListener("click", () => {
	console.log(darkTheme);
	console.log(darkTheme.theme);

	if (darkTheme.length == 0) {
		darkTheme.theme = true;
	}

	console.log(darkTheme.theme);

	darkTheme.theme = !darkTheme.theme;

	if (darkTheme.theme) {
		themeStylesheet.href = "/css/dark-theme.css";
		localStorage.setItem("pageTheme", JSON.stringify({ theme: true }));
	} else {
		themeStylesheet.href = "/css/light-theme.css";
		localStorage.setItem("pageTheme", JSON.stringify({ theme: false }));
	}
});
