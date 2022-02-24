// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')
var paletteBox = document.querySelector('.palettes')


// Event Listeners:
paletteBox.addEventListener('click', function(event){
	locked(event);
});

newPalette.addEventListener('click', generateNewPalette)
generateNewPalette()

function locked(event){
	var test = instentiatePalette();
	console.log(test.colors);
	test.makeLocked(event.target.id)
	
}

function instentiatePalette(){
	var currentPalette = new Palette();
	return currentPalette;
}

function generateNewPalette() {
	var currentPalette = instentiatePalette();
	
	for(var i = 0; i < currentColors.length; i++) {
		currentColors[i].style.backgroundColor = currentPalette.colors[i].hexCode;
		displayedHexCode[i].innerText = currentPalette.colors[i].hexCode;
		currentColors[i].id = currentPalette.colors.indexOf(currentPalette.colors[i])
	}
}

