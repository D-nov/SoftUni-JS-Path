function editElement(htmlElement, matcher, replacer) {
    htmlElement.innerText = htmlElement.innerText.split(matcher).join(replacer);
}