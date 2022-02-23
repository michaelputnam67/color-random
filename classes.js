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
	constructor(color) {
		this.colors = [new Color(), new Color(), new Color(), new Color(), new Color()]
		// this.colors1 = new Color();
		// this.colors2 = new Color();
		// this.colors3 = new Color();
		// this.colors4 = new Color();
		// this.colors5 = new Color();
		this.id = Date.now();
		console.log(this)
	}
	replaceColor() {

	}


}	