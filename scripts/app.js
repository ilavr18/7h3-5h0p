const smallBtn = document.getElementById("small-btn")
const mediumBtn = document.getElementById("medium-btn")
const largeBtn = document.getElementById("large-btn")
const whiteBtn = document.getElementById("white-btn")
const yellowBtn = document.getElementById("yellow-btn")
const greenBtn = document.getElementById("green-btn")
const tshirtElement = document.getElementById("tshirt-image")


smallBtn.onclick = function () {
    smallBtn.style.border = "3px solid #cc0000"
    mediumBtn.style.border = "1px solid #000000"
    largeBtn.style.border = "1px solid #000000"
}
mediumBtn.onclick = function () {
    smallBtn.style.border = "1px solid #000000"
    mediumBtn.style.border = "3px solid #cc0000"
    largeBtn.style.border = "1px solid #000000"
}
largeBtn.onclick = function () {
    smallBtn.style.border = "1px solid #000000"
    mediumBtn.style.border = "1px solid #000000"
    largeBtn.style.border = "3px solid #cc0000"
}

whiteBtn.onclick = function () {
    tshirtElement.src = "img/tshirts/tshirt_white.jpg"
    whiteBtn.style.border = "3px solid #cc0000"
    yellowBtn.style.border = "1px solid #000000"
    greenBtn.style.border = "1px solid #000000"
}
yellowBtn.onclick = function () {
    tshirtElement.src = "img/tshirts/tshirt_yellow.jpg"
    whiteBtn.style.border = "1px solid #000000"
    yellowBtn.style.border = "3px solid #cc0000"
    greenBtn.style.border = "1px solid #000000"
}
greenBtn.onclick = function () {
    tshirtElement.src = "img/tshirts/tshirt_green.jpg"
    whiteBtn.style.border = "1px solid #000000"
    yellowBtn.style.border = "1px solid #000000"
    greenBtn.style.border = "3px solid #cc0000"
}