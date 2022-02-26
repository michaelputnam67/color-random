class Palette {
	constructor(colors) {
		this.colors = colors
		this.id = Date.now();
	}
	makeLocked(id) {
		this.colors[id].locked = true;
	}
	makeUnlocked(id){
		this.colors[id].locked = false;
	}

}
