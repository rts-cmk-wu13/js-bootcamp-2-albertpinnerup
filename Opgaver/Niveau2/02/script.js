const addButtons = document.querySelectorAll(".product__add");
const subtractButtons = document.querySelectorAll(".product__subtract");
const amounts = document.querySelectorAll(".product__amount");
const prices = document.querySelectorAll(".product__price");

const originalPrices = [15, 20, 30];


addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        let currentAmount = parseInt(amounts[index].textContent);
        currentAmount++

        amounts[index].textContent = currentAmount;

        prices[index].textContent = originalPrices[index] * currentAmount + "kr";

        console.log(index);

    });
});

subtractButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let currentAmount = parseInt(amounts[index].textContent)

        if (currentAmount > 0) {

            currentAmount--
            amounts[index].textContent = currentAmount

            prices[index].textContent = originalPrices[index] * currentAmount + "kr";
        }
    });
})


