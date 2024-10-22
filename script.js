let nput = document.querySelector("input");
let addButton = document.getElementById('button');
let todo = document.querySelector('.todo')
 
addButton.addEventListener('click', () => {
    if (nput.value == "") {
        alert(' !error, enter your task');
    } else {

        var paragraph = document.createElement("li");
        paragraph.innerText = `${nput.value}`;
        todo.appendChild(paragraph)
        nput.value = "";
        paragraph.addEventListener("dblclick", () => {
            paragraph.remove();
        })
    }

})
