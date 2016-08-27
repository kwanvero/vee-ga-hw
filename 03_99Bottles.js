// Assignment 1: 99 Bottles of Beer
//
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
// Make sure your program can handle both singular and plural cases
// (i.e. both "100 bottles of beer" and "1 bottle of beer").

var lyricParts = [' bottles of beer', ' bottle of beer', ' on the wall ', ' you take one down pass it around...', 'No more', 'Go to the store and buy some more, ']

for (var number = 100; number > -1; number--) {
  if (number >= 2) {
    console.log(number + lyricParts[0] + lyricParts[2])
    console.log(number + lyricParts[0] + lyricParts[2] + number + lyricParts[0] + ',' + lyricParts[3])
  } else if (number === 1) {
    console.log(number + lyricParts[1] + lyricParts[2])
    console.log(number + lyricParts[1] + lyricParts[2] + number + lyricParts[1] + ',' + lyricParts[3])
  } else {
    console.log(lyricParts[4] + lyricParts[0] + lyricParts[2])
    console.log(lyricParts[4] + lyricParts[0] + lyricParts[2] + lyricParts[4] + lyricParts[0])
    console.log(lyricParts[5])
  }
}

number += 100
console.log(number + lyricParts[0] + lyricParts[2] + '.')
