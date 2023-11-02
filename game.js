// Iteration 2: Generate 2 random number and display it on the screen

var number1 = Math.round(Math.random() * 100)
var number2 = Math.round(Math.random() * 100)

var n1 = document.querySelector("#number1")
var n2 = document.querySelector("#number2")

n1.innerHTML= number1
n2.innerHTML= number2

// Iteration 3: Make the options button functional

const b1 = document.querySelector("#greater-than")
const b2 = document.querySelector("#equal-to")
const b3 = document.querySelector("#lesser-than")

var score = 0

b1.onclick = function(){
    if(number1>number2)
    {
        score++
        resetTimer(timerId)
    }
    else
    {
        location.href = "./gameover.html"
    }

    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    n1.innerHTML= number1
    n2.innerHTML= number2
}

b3.onclick = function(){
    if(number1<number2)
    {
        score++
        resetTimer(timerId)
    }
    else
    {
        location.href = "./gameover.html"
    }

    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    n1.innerHTML= number1
    n2.innerHTML= number2
}

b2.onclick = function(){
    if(number1==number2)
    {
        score++
        resetTimer(timerId)
    }
    else
    {
        location.href = "./gameover.html"
    }

    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    n1.innerHTML= number1
    n2.innerHTML= number2
}

// Iteration 4: Build a timer for the game

var timer = document.querySelector("#timer")
var time=5
var timerId

function startTimer(){
    time=5
    time.innerHTML=time
    timerId = setInterval(()=>{
        time--
        if(time == 0)
        {
            location.href = "./gameover.html"
        }
        timer.innerHTML=time
    },1000)

    localStorage.setItem("score",score)
}

function resetTimer(intervadId){
    clearInterval(intervadId)
    startTimer()
}

startTimer()
