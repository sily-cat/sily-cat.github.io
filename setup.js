var footerString = `discord: @sily.cat · youtube: @x53x53 · github: sily-cat`

window.addEventListener("load", (event) => {
	var footer = document.getElementById("footer")
	footer.innerHTML = `<p>${footerString}</p>`
	footer.style.fontSize = `min(${200/footerString.length}vw, 19px)`
});