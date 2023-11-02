// Iteration 5: Store the player score and display it on the game over screen

const again = document.querySelector("#play-again-button")

again.onclick = function(){
    location.href = "./game.html"
}

let sc = localStorage.getItem("score")

const box = document.querySelector("#score-board")

box.innerHTML = sc