/* Independent Practice

Todo app:

- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: render)

- Also, when a new item is added to the list, clear the input box.

- Using javascript, add a "complete task" link at the end of each to-do item

- When clicked, the link will cross out the current item (hint: change the class to a class that sets the text-decoration to line-through)

- Each new item added by the user needs to also have the "complete task" link at the end

*/

// The container of the whole project
let container = document.querySelector('#list')

// Array
let state = {
    todos: [ 'Clean Cat litter', 'Feed Cat']
}

// Input Submit Controller
delegate('body', 'click', '#new-item-button', event => {
    let newTodo = document.querySelector('#new-item').value
    switch (newTodo) {
        case '':
            window.alert(`You must type in a favourite thing!`)
            break;
        default:
        // add new todo
        state.todos.push(newTodo)
        // Clear input field
        newTodo.value = ''
        // Render state
        render(state, container)
    }
})

function render(data, element) {
    // Create HTML of li's with todo list
    let todos = data.todos.map(todo =>{
        return `<li class="item" style="list-style: url(images/untick.png);">${todo}</li>`
    }).join('\n')

    element.innerHTML = todos
}


render(state, container)



// Totally stumpped, and cannot get elements to remove child properly
// Tried to separate them using MVC methodology, very confused, and don't know where to start
delegate('#list', 'click', 'li', event => {
    let toDoItem = event.target
    let yayIMGcreate = document.createElement('img')
    let yayIMG = document.querySelector('img')
    if (event.target.className === 'item') {
        event.target.setAttribute('style', 'list-style: url(images/tick.png);')
        event.target.className = ''
        event.target.appendChild(yayIMGcreate).setAttribute('src','images/yay.gif')
    } else {
        event.target.setAttribute('style', 'list-style: url(images/untick.png);')
        event.target.className = 'item'
        event.target.removeChild(yayIMG)
    }
})


// Tried to separate them using MVC methodology, very confused, and don't know where to start
function renderComplete(){
}
