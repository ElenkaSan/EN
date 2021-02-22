function randomCr() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter');
const interalId = setInterval(function () {
	for (let letter of letters) {
		letter.style.color = randomCr();
	}

}, 1500);