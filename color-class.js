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
