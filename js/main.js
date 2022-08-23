let button = document.querySelector("button")
let form = document.getElementById("form")
let right = document.getElementById("right")
let rightChiled = Array.from(document.querySelectorAll("div input"))
function complete() {
    let newDiv = document.createElement('div')
    let img = document.createElement("img")
    let h1ele = document.createElement("h2")
    let text1 = document.createTextNode("THANK YOU!")
    let myp = document.createElement("p")
    let text2 = document.createTextNode("We,ve added your card details")
    right.style.display = "flex"
    h1ele.appendChild(text1)
    myp.appendChild(text2)
    newDiv.appendChild(img)
    img.setAttribute("src", 'images/icon-complete.svg')
    newDiv.appendChild(h1ele)
    newDiv.appendChild(myp)
    right.appendChild(newDiv)
    newDiv.classList.add("suiii")
    newDiv.classList.add("righto")
    form.classList.add("hidden")
    form.style.display = 'none'
    button.value = 'Cuntinue'
}
form.addEventListener('submit', complete)
form.addEventListener('submit', e => e.preventDefault())