//TIMER LOGIC FOR START AND RESET BUTTON
let strbtn = document.querySelector("#start-game");
let rstbtn = document.querySelector("#reset-game");
let timer = document.querySelector("#time");

let elapsed = 0;
let previouslyElapsed = 0;
let calculator;

function Format(elapsed) {
    let min = Math.floor(elapsed/60);
    let formatted_min = String(min).padStart(2,"0");
    let sec = elapsed%60;
    let formatted_sec = String(sec).padStart(2, "0");
    timer.innerText = `${formatted_min}:${formatted_sec}`;
}

function startTimer(startTime) {
    clearInterval(calculator); // kill any old interval
    calculator = setInterval(() => {
        elapsed = Date.now() - startTime + previouslyElapsed;
        let Inseconds = Math.floor(elapsed/1000);
        Format(Inseconds);
    },200)
}

function stopTimer() {
    clearInterval(calculator);
}


strbtn.addEventListener("click" , function() {
    if (strbtn.innerText === "Start Game") {
        strbtn.innerText = "Pause";
        let startTime = Date.now();
        startTimer(startTime);
    }
    else if (strbtn.innerText === "Pause"){
        strbtn.innerText = "Resume";
        stopTimer();
        previouslyElapsed = elapsed;    
    }
    else if (strbtn.innerText === "Resume") {
        strbtn.innerText = "Pause"
        let startTime = Date.now();
        startTimer(startTime);
    }
})


rstbtn.addEventListener("click", () => {
    strbtn.style.visibility = "visible";
    stopTimer();
    timer.innerText = "00:00";
    strbtn.innerText = "Start Game";
    document.querySelector("#moves").innerText = 0;
    elapsed = 0;
    previouslyElapsed = 0;
    moveCount = 0;
    document.querySelector(".Winner").innerText = "";
    setTimeout(() => {
        for (combos of flippedCardsCombos){
            for (card of combos) {
                card.classList.remove("flipped")
            }
        }
        curCardCombo[0].classList.remove("flipped");
        flippedCardsCombos = [];
    },600);
})




//Flipping Logic
let flippedCardsCombos = [];
let curCardCombo = [];
let lockboard = false;
let moveCount = 0;

function cardMatching() {
    if (curCardCombo[0].getAttribute("data-card") === curCardCombo[1].getAttribute("data-card")){
        setTimeout(() => {
        flippedCardsCombos.push([...curCardCombo]);

        //Checking for winner
        if (flippedCardsCombos.length === 8) {
            document.querySelector(".Winner").innerText = `Congratulatins you have completed the game in given time and moves`;
            strbtn.style.visibility = "hidden";
            stopTimer();
        };

            curCardCombo = [];
            lockboard = false;
        },600)
    }
    else {
        setTimeout(() => {
            for (card of curCardCombo) {
                card.classList.remove("flipped")
            }
            curCardCombo = [];
            lockboard = false;
        },600);
    }
}


let cards = document.querySelectorAll(".card")
cards.forEach(card => {
    card.addEventListener("click" , ()=>{
    //Do not let the game run untill start and resume buttons are pressed
    if ((strbtn.innerText === "Start Game") || (strbtn.innerText === "Resume")) return;
    //To make sure no clicks happen when checking the condition
    if (lockboard) return;
    //to make matched card unclickable
    for (Combo of flippedCardsCombos){
        if (Combo.includes(card)) return;
    }

    card.classList.add("flipped");
    curCardCombo.push(card);

    //Preventing double clicking of the same card
    if (curCardCombo.length === 2) {
        if (curCardCombo[0] === curCardCombo[1]) {
            curCardCombo.pop();
            return
        };
    }

    if (curCardCombo.length === 2) {
        lockboard = true;
        moveCount = moveCount + 1;
        cardMatching();
        document.querySelector("#moves").innerText = moveCount;
    }
})
})
