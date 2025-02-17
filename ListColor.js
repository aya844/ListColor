let list = document.querySelector("#list")

function showElements() {
    Object.values(list.children).forEach(child => {

        console.log(child.innerHTML)

    });
}

Object.values(list.children).forEach(element => {
    element.addEventListener("click", () => {
        let randomColor = Math.floor(Math.random() * 2546).toString(16);
        element.style.color = "#" + randomColor
        console.log(element.tagName, element.innerHTML, "\t", element.style.color)

    })

});