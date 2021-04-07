let container = document.getElementById("container")
let card = document.getElementById("card")
let real = document.getElementById("real")

card.addEventListener("click", function(e) {
	displayDark(e)
})

function displayDark(e) {
	let x = e.clientX
	let y = e.clientY

	let star = document.getElementById("star")
	star.style.left = (x - 2500) + "px"
	star.style.top = (y - 2500) + "px"

	star.style.display = "initial"
	star.classList.add("star-active")

	card.style.visibility = "hidden"
	setTimeout(() => {
		container.style.backgroundColor = "black"
		star.style.display = "none"
		window.location.href = "real.html";
	}, 1000)
}