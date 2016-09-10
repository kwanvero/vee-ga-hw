/* Independent Practice

Making a favorites list: DOM manipulation

- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/
window.onload = function () {
  let newThingButton = document.querySelector('#new-thing-button')
  let list = document.querySelector('ul')
  let favThingInput = document.querySelector('#new-thing')
  list.setAttribute(
 'style', 'list-style: url(images/tick.png);')

  // when someone clicks the button...
  newThingButton.addEventListener('click', event => {
    event.preventDefault()
    switch (favThingInput.value) {
      case '':
        window.alert(`You must type in a favourite thing!`)
        break
      default:
        let element = document.createElement('li')
        element.innerHTML = favThingInput.value
        list.appendChild(element)
        element.classList.add('fav-thing')
        // let createCheckImg = document.createElement('img')
        // createCheckImg.src = 'images/untick.png'
        // listItem.appendChild(createCheckImg)
        favThingInput.value = ''
    }
  })
  // When someone clicks the list
  let handleClick = event => {
    // Untick when NOT part of my favourite things lyric
    if (event.target.classList.contains('fav-thing')) {
      event.target.setAttribute('style', 'text-decoration: line-through; list-style: url(images/untick.png);')
      event.target.classList.toggle('fav-thing')
  } else { // Tick when part of my favourite things lyric
      event.target.setAttribute('style', 'list-style: url(images/tick.png);')
      event.target.classList.toggle('fav-thing')
    }
  }

  list.addEventListener('click', handleClick)

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
}

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
