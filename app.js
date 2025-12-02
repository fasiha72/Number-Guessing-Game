//store a number to guess
let randomNum = Math.floor(Math.random() * 100) + 1

//variable to
let guessInput = document.getElementById("guessInput");
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");
let restartButton = document.getElementById("restartButton");

checkButton.onclick = () => {
    let guess = Number(guessInput.value);
    if (guess < 1 || guess > 100) {
        result.textContent = "Enter a number between 1 to 100";
        result.style.color = "red"
    }
    else if (guess === randomNum) {
        result.innerHTML = "<b> 🎉 Congratulations❗ You Win💖 </b>";
        result.style.color = "green";
        checkButton.disabled = true;
        restartButton.style.display = "block";
    }
    else {
        result.textContent = guess < randomNum ? "Too Low❗ Try again" : "Too High❗ Try again";
        result.style.color = "orange"
    }
    guessInput.value = "";
    guessInput.focus();
};

restartButton.onclick = () => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
}
