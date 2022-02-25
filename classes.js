class Color {
	constructor() {
		this.hexCode = this.makeHex();
		this.locked = false;
	}

	makeHex() {
		var characters = 'abcdef0123456789'
		var charLength = characters.length
		var result = '#';
		for(var i = 0; i < 6; i++) {
			result += characters.charAt(Math.floor(Math.random()* charLength))
		}
		return result
	}
}

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
