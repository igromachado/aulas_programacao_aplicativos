function AddTask(){
    let input = document.getElementById('task').value
    let list = document.getElementById('list')

    let li = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"

    li.appendChild(checkbox)

    li.appendChild(document.createTextNode(" " + input))

    list.appendChild(li)
}

