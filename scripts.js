

function makeHex() {
  var characters = 'abcdef0123456789'
  var charLength = characters.length
  var result = '#';
  for(i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random()* charLength))
  }
  return result
}
