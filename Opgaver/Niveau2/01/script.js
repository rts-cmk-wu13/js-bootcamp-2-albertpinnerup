const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
    button.addEventListener("click", changeColor);
});

function changeColor(e) {
    const clickedButton = e.target;

    // If the clicked button is already "active", remove "active" and reset "off"
    if (clickedButton.classList.contains("active")) {
        clickedButton.classList.remove("active");
        buttons.forEach(button => button.classList.remove("off")); // Reset all "off" states
        return; // Stop execution
    }

    // First, remove "active" from all buttons
    buttons.forEach(button => button.classList.remove("active", "off"));

    // Add "active" to the clicked button
    clickedButton.classList.add("active");

    // Add "off" to all other buttons
    buttons.forEach(button => {
        if (button !== clickedButton) {
            button.classList.add("off");
        }
    });
}
