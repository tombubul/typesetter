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
    /* not sure we need any of this
    var textnode = document.createTextNode( withValue );
    character.appendChild(textnode);
    */

    // newCharacter.setAttribute("id", characterValue )
    // newCharacter.setAttribute("style", "background-image: url('" + characterValue + ".png');" )

    var div = document.getElementById('word')
    div.insertAdjacentHTML('beforebegin', "<img src=" + characterValue + ".png>");

    // document.getElementById("word").appendChild(newCharacter);

    // SetCharacterSize( printable[charCount] , charCount )
  }
}

/* 
  - get the background image dimensions for a character
  - extract that image's dimensions
  - update the char a min-width/min-height
  */

// function SetCharacterSize ( char , offsetMultiplier ) {

//     var imageSrc = document.getElementById( char )
//       .style
//       .backgroundImage
//       .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
//       .split(',')[0];

//     console.log("image source = " + imageSrc)

//     var image = new Image()
//     image.src = imageSrc

//     var setSizes = document.getElementById ( char )

//     var marginOffset = -60
//     // var marginOffset = offsetMultiplier * image.width * -0.10;

//     // this is wrong/racey:

//     setSizes.setAttribute("style", "background-image: url('" +image.src+ "');min-width:"+image.width+";min-height:"+image.height+";z-index:"+offsetMultiplier+";margin-left:"+marginOffset+";" )
// }
