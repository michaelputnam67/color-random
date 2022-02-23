// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')


// Event Listeners:

newPalette.addEventListener('click', testFunction)
testFunction()

function testFunction() {
	var currentPalette = new Palette()
	for(var i = 0; i < 5; i++) {
		currentColors[i].style.backgroundColor = currentPalette.colors[i].hexCode;
		displayedHexCode[i].innerText = currentPalette.colors[i].hexCode;
	}
}

