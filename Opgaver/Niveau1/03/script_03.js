function skjulElementViaCssSelector(cssSelector) {
    let element = document.querySelector(cssSelector);

    if (element !== null) {
        element.style.display = "none"
    }
}

skjulElementViaCssSelector("#my-button");