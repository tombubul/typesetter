function Print( okay ) {

  // get and define input
  let print = document.getElementById("textinput").value.split(``)
  let printlength = print.length

  // define and clear the typeset
  let typesetter = document.getElementById("typesetter")

  var type = "<li class='word'>"
  var characterValue

  for( charCount = 0; charCount < printlength; charCount++ ) {

    characterValue = print[charCount].toLowerCase()

    // insert space and close the word, but disallow trailing spaces

    if( characterValue == " " )
    {

      type += "</li><li class='word'>"
    }

    else {

      type += "<img class=item src=letterset2/" + characterValue + ".png>";
    }
  }

  type += "</li>"

  // close last word div
  typesetter.innerHTML = type
}
