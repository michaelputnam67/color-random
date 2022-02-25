// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')
var paletteBox = document.querySelector('.palettes')
var paletteId = document.querySelectorAll('.palettes__color')
var lockImg = document.querySelectorAll('.lock')
var savePaletteButton = document.querySelector('.buttons__save-palette')


var currentPalette;
window.addEventListener('load', newPaletteInstance)

var savedPalletes = []
var previousLockedColors = [null, null, null, null, null]

// Event Listeners:
paletteBox.addEventListener('click', function(event){
	locked(event);
});

newPalette.addEventListener('click', function(){
	newPaletteInstance()
})

savePaletteButton.addEventListener('click', function() {
	saveCurrentPalette()
})

function saveCurrentPalette() {
	if(!savedPalletes.includes(currentPalette)) {
		// for(var i = 0; i < currentPalette.length; i++) {
		// 	if(currentPalette.colors[i].locked) {
		// 		currentPalette.colors[i].locked = false;
		// 	}
		// }
		savedPalletes.push(currentPalette)
	}
}

function locked(event){
	var index = event.target.id
	if (!index) return;
	if(!currentPalette.colors[index].locked){
		currentPalette.makeLocked(index)
		storeLockedPalettes()
		lockImg[index].style.content = "url(./assets/images/Locked-lock.png)"
	} else {
		currentPalette.makeUnlocked(index)
		removeLockedPalettes(index)
		lockImg[index].style.content = "url(./assets/images/unlocked-lock.png)"
	}
}

function newPaletteInstance() {
	console.log(savedPalletes)
	var color1 =  previousLockedColors[0] || new Color();
	var color2 =  previousLockedColors[1] || new Color();
	var color3 =  previousLockedColors[2] || new Color();
	var color4 =  previousLockedColors[3] || new Color();
	var color5 =  previousLockedColors[4] || new Color();
	currentPalette = new Palette([color1, color2, color3, color4, color5]);
	generateNewPalette()
}

function storeLockedPalettes() {
	for(var i = 0; i < currentColors.length; i++) {
		if(currentPalette.colors[i].locked && !previousLockedColors.includes(currentPalette.colors[i])) {
			previousLockedColors.splice(i, 1, currentPalette.colors[i])
		}
	}
}

function removeLockedPalettes(index) {
			previousLockedColors.splice(index, 1, null)
		}

function generateNewPalette() {
	for(var i = 0; i < currentColors.length; i++) {
		if(!currentPalette.colors[i].locked) {
		currentColors[i].style.backgroundColor = currentPalette.colors[i].hexCode;
		displayedHexCode[i].innerText = currentPalette.colors[i].hexCode;
		currentColors[i].id = currentPalette.colors.indexOf(currentPalette.colors[i])
		}
	}
}
