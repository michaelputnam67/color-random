// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')
var paletteBox = document.querySelector('.palettes')
var paletteId = document.querySelectorAll('.palettes__color')
var lockImg = document.querySelectorAll('.lock')

var currentPalette;
newPaletteInstance()

// Event Listeners:
paletteBox.addEventListener('click', function(event){
	locked(event);
});

newPalette.addEventListener('click', function(){
	generateNewPalette()
})

function locked(event){
	var index = event.target.id
	if (!index) return;

	if(!currentPalette.colors[index].locked){
		currentPalette.makeLocked(index)
		lockImg[index].style.content = "url(./assets/images/Locked-lock.png)"
	} else {
	 	currentPalette.makeUnlocked(index)
		lockImg[index].style.content = "url(./assets/images/unlocked-lock.png)"
	}
}

function newPaletteInstance() {
	currentPalette = new Palette();
	generateNewPalette()
}

function generateNewPalette() {
	for(var i = 0; i < currentColors.length; i++) {
		if(!currentPalette.colors[i].locked) {
		currentPalette.colors[i] = new Color();
		currentColors[i].style.backgroundColor = currentPalette.colors[i].hexCode;
		displayedHexCode[i].innerText = currentPalette.colors[i].hexCode;
		currentColors[i].id = currentPalette.colors.indexOf(currentPalette.colors[i])
		}
	}
}
