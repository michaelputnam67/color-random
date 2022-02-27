//~~~~~~~~~~~~~~~~~~~~~~Query Selectors~~~~~~~~~~~~~~~~~~~~~~~~
var newPalette = document.querySelector('.buttons__new-palette');
var currentColors = document.querySelectorAll('.palettes__current');
var displayedHexCode = document.querySelectorAll('.hex-code');
var paletteBox = document.querySelector('.palettes');
var lockImg = document.querySelectorAll('.lock');
var savePaletteButton = document.querySelector('.buttons__save-palette');
var sidebar = document.querySelector('.sidebar');
var miniPalette = document.getElementsByClassName('mini__palette');
var paletteColor = document.querySelector('.palettes__color')

//~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~
var currentPalette;
var savedPalettes = []
var previousLockedColors = [null, null, null, null, null]

//~~~~~~~~~~~~~~~~~~~~~~~~Event listeners~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', newPaletteInstance);

sidebar.addEventListener('click', function(event){
	deleteSaved(event)
});

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
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~
function newPaletteInstance() {
	var color1 =  previousLockedColors[0] || new Color();
	var color2 =  previousLockedColors[1] || new Color();
	var color3 =  previousLockedColors[2] || new Color();
	var color4 =  previousLockedColors[3] || new Color();
	var color5 =  previousLockedColors[4] || new Color();
	currentPalette = new Palette([color1, color2, color3, color4, color5]);
	generateNewPalette()
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

function locked(event){
	var index = parseInt(event.target.dataset.index);
	if (isNaN(index)) { 
		return };
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

function saveCurrentPalette() {
	savePaletteButton.disabled = true;
	savedPalettes.unshift(currentPalette)
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

function deleteSaved(event){
	var itemToDelete = parseInt(event.target.id)
	for(var i = 0; i < savedPalettes.length; i++){
		if(itemToDelete === savedPalettes[i].id){
			savedPalettes.splice(i, 1)
			event.target.parentElement.remove()
		}
	}
}

function savePaletteToggle() {
	if(savePaletteButton.disabled) {
		savePaletteButton.disabled = false;
	}
}
