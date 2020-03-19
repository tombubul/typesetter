/*
  - take a form input
  - create a node with an id for each letter
*/

function Print () { 

  var word = document.getElementById("textinput").value

  let printable = word.split('')
  let wordlength = printable.length

  for( charCount = 0; charCount < wordlength; charCount++ ) {

    var newCharacter = document.createElement("li"); 
    var characterValue = printable[charCount].toLowerCase()
    var div = document.getElementById('word')
    div.insertAdjacentHTML('beforebegin', "<img src=letterset2/" + characterValue + ".png>");
  }
}
