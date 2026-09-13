const textArea = document.getElementById("thoughts");
const characterCounter = document.getElementById("charCount");
const submitButton = document.getElementById("submit-btn");

// Add event listener to the text area to check for characters
textArea.addEventListener("input", () => {
    let count = textArea.value.length;
    characterCounter.textContent = count + "/280 characters";
    
    if (count > 280) {
        submitButton.disabled = true;
        characterCounter.style.color = "red";
        textArea.style.borderColor = "red";
    } else if (count > 260 && count <= 280){
        submitButton.disabled = false;
        characterCounter.style.color = "orange";
        textArea.style.borderColor = "orange";
    } else {
        submitButton.disabled = false;
        characterCounter.style.color = "black";
    }
})

submitButton.addEventListener("click", () => {
    console.log("The submit button has been clicked");
    textArea.value = "";
})