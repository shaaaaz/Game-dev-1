// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


const button = document.querySelector("#play-button")

button.onclick = () => {
    location.href = "./game.html"
}