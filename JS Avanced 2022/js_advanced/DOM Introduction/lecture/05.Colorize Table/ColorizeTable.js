function colorize() {
    let table = document.querySelectorAll("table tr:nth-child(2n)");

    for (let i = 0; i < table.length; i++) {
        table[i].style.background = 'teal';
    }
}