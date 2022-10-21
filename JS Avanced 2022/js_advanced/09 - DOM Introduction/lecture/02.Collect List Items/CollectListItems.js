function extractText() {
    let element = document.getElementById('items');
    let items = Array.from(element.children);

    let input = document.getElementById('result');
    input.value = items.map(item=>{
        return item.textContent;
    }).join('\n');
}