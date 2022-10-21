function addItem() {
    let input = document.getElementById('newItemText').value;

    let li = document.createElement("li")
        li.innerText = input;
    let list = document.getElementById('items')
        list.appendChild(li)
}