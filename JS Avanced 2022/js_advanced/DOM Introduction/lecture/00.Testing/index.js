function log(id, inputID){
    let input = document.getElementById(inputID);
    let value = input.value;

    let ul = document.getElementById(id);
    let lastChild = ul.lastElementChild;
    let nextID = Number(lastChild.id) + 1;

    let li = document.createElement("li");
    li.setAttribute('id', nextID);
    li.innerText = value;
    ul.appendChild(li);

    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('onClick', `deleteItem(${nextID})`);
    button.innerText = "Delete me.";
    li.appendChild(button);
}

function deleteItem(idOfListEllement){
    let li = document.getElementById(idOfListEllement);
    li.remove();
}