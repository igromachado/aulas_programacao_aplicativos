function add(){
    let text = document.getElementById('text').value
    let link = document.getElementById('link').value
    let line = document.getElementById('line')
    let square = document.createElement('div')
    let img = document.createElement('img')
    let span1 = document.createElement('span')

    square.classList.add("square")
    line.appendChild(square)

    img.src = link
    span1.innerHTML = text
    
    square.appendChild(img)
    square.appendChild(span1)

 

}