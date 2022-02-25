// Query Selectors:
var newPalette = document.querySelector('.buttons__new-palette')
var currentColors = document.querySelectorAll('.palettes__current')
var displayedHexCode = document.querySelectorAll('.hex-code')
var paletteBox = document.querySelector('.palettes')
var paletteId = document.querySelectorAll('.palettes__color')
var lockImg = document.querySelectorAll('.lock')
var savePaletteButton = document.querySelector('.buttons__save-palette')
var sidebar = document.querySelector('.sidebar')
var miniPalette = document.getElementsByClassName('mini__palette')
var sidebarInstance = document.getElementsByClassName('sidebar__new-instance')
// var tinyPalette = document.getElementsByClassName('mini__palette')


var currentPalette;
window.addEventListener('load', newPaletteInstance)

var savedPalettes = []
var previousLockedColors = [null, null, null, null, null]

// Event Listeners:
paletteBox.addEventListener('click', function(event){
	locked(event);
});

newPalette.addEventListener('click', function(){
	newPaletteInstance();
	savePaletteToggle();
})

savePaletteButton.addEventListener('click', function() {	
	saveCurrentPalette();
	addMiniPalettesHTML();
	// displayMiniPalettes();
})

function saveCurrentPalette() {
	savePaletteButton.disabled = true;
	if(!savedPalettes.includes(currentPalette)) {
		// for(var i = 0; i < currentPalette.length; i++) {
		// 	if(currentPalette.colors[i].locked) {
		// 		currentPalette.colors[i].locked = false;
		// 	}
		// }
		savedPalettes.unshift(currentPalette)
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

function addMiniPalettesHTML(){
	sidebar.innerHTML += `
	<section class="sidebar__new-instance">
	<section class="mini__palette" style='background-color:${savedPalettes[0].colors[0].hexCode}'></section>
	<section class="mini__palette" style='background-color:${savedPalettes[0].colors[1].hexCode}'></section>
	<section class="mini__palette" style='background-color:${savedPalettes[0].colors[2].hexCode}'></section>
	<section class="mini__palette" style='background-color:${savedPalettes[0].colors[3].hexCode}'></section>
	<section class="mini__palette" style='background-color:${savedPalettes[0].colors[4].hexCode}'></section>
	<section class="mini__trashcan" id='${savedPalettes[0].id}'></section>
  </section>`
}

function savePaletteToggle() {
	if(savePaletteButton.disabled) {
		savePaletteButton.disabled = false;
	} 
}



// function displayMiniPalettes(test){
// 				test[1].style.backgroundColor = savedPalettes[0].colors[0].hexCode;
// 				test[3].style.backgroundColor = savedPalettes[0].colors[1].hexCode;
// 				test[5].style.backgroundColor = savedPalettes[0].colors[2].hexCode;
// 				test[7].style.backgroundColor = savedPalettes[0].colors[3].hexCode;
// 				test[9].style.backgroundColor = savedPalettes[0].colors[4].hexCode;
// 			}

// 	function test() {
// 		console.log(sidebarInstance)
// 			var test = sidebarInstance[sidebarInstance.length-1].childNodes
// 			displayMiniPalettes(test)
// 	}