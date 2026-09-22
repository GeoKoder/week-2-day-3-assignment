// DOM Elements 
const itemName = document.getElementById("item-name");
const itemQuantity = document.getElementById("quantity");
const submitBtn = document.getElementById("submit-btn");
const shoppingList = document.getElementById("shopping-list");
const errorMessage = document.getElementById("error-message");
const remainingCountDisplay = document.getElementById("remain-count");

// Create an ordered list 
const orderedList = document.createElement("ul");
shoppingList.appendChild(orderedList);

let remainingCount = 0;

// Updates the Count Display
function updateCounterDisplay() {
    remainingCountDisplay.textContent = remainingCount;
}   


// Input Validator function
function isInputValid(name, quantity) {
    if (name === "") {
        errorMessage.textContent = "Item name cannot be empty";
        return false;
    }

    if (quantity === "" || isNaN(quantity) || Number(quantity) <= 0) {
        errorMessage.textContent = "Quantity must be a positive number";
        return false;
    }

    // Only reached if both checks pass
    errorMessage.textContent = "";
    return true;
}

// Builds the list item with everything including the buttons
function createListItem(name, quantity) {
    const listItem = document.createElement("li");
    listItem.textContent = `Shopping Item: ${name}. Quantity: ${quantity}`;

    let isBought = false;

    const boughtBtn = document.createElement("button");
    boughtBtn.textContent = "Bought";
    boughtBtn.classList.add("btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn");

    boughtBtn.addEventListener("click", () => {
        if (isBought) {
            return
        }

        isBought = true;
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "grey";

        remainingCount--;
        updateCounterDisplay();
    })

    deleteBtn.addEventListener("click", () => {
        if (!isBought) {
            remainingCount--;
            updateCounterDisplay();
        }

        listItem.remove();
    })

    listItem.appendChild(boughtBtn);
    listItem.appendChild(deleteBtn);

    return listItem;
}

// Resets the input fields
function clearInputFields() {
    itemName.value = "";
    itemQuantity.value = "1";
}

// Tracking clicks on the submit Button
submitBtn.addEventListener("click", () => {
    const nameValue = itemName.value.trim();
    const quantityValue = itemQuantity.value.trim();

    if (!isInputValid(nameValue, quantityValue)) {
        return;
    }

    const newItem = createListItem(nameValue, quantityValue);
    orderedList.appendChild(newItem);
    clearInputFields();

    remainingCount++;
    updateCounterDisplay();
})