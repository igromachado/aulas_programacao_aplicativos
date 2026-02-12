function add(){
    let input = document.getElementById('input').value
    let list = document.getElementById('list')
    let div = document.createElement('div')
    let button = document.createElement('button')
    let span = document.createElement('span')

    div.classList.add('item')
    list.appendChild(div)

    span.innerHTML = input
    button.textContent="Deletar"

    div.appendChild(span)
    button.classList.add('buttonDelete')
    div.appendChild(button)

    button.addEventListener('click', () => {
        button.parentElement.remove()
    })
}