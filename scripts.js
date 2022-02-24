// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')
var paletteBox = document.querySelector('.palettes')
var paletteId = document.querySelectorAll('.palettes__color')

var currentPalette = new Palette();
generateNewPalette()

// Event Listeners:
paletteBox.addEventListener('click', function(event){
	console.log(event.target);
	locked(event);
});

newPalette.addEventListener('click', function(){
	generateNewPalette()

})







function locked(event){

	currentPalette.makeLocked(event.target.id)
	
}

function generateNewPalette() {
	 currentPalette = new Palette();
	for(var i = 0; i < currentColors.length; i++) {
		currentColors[i].style.backgroundColor = currentPalette.colors[i].hexCode;
		displayedHexCode[i].innerText = currentPalette.colors[i].hexCode;

		currentColors[i].id = currentPalette.colors.indexOf(currentPalette.colors[i])
	}
}

