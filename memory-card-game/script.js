//Randomly Selecting the places of the photos

let strbtn = document.querySelector("#start-game")
let timer = document.querySelector("#time")

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
    if (strbtn.innerText === "Start Game"){
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


let rstbtn = document.querySelector("#reset-game");
rstbtn.addEventListener("click", () => {
    stopTimer();
    timer.innerText = "00:00";
    strbtn.innerText = "Start Game"
    elapsed = 0;
    previouslyElapsed = 0;
})










//Flipping Logic

let flippedCardsCombos = [];
let cardCombo = [];
let cardAttributes = [];
let lockboard = false;

for (let i = 1 ; i < 17 ; i++) {
    let card = document.querySelector(`#card-${i}`)
    card.addEventListener("click" , ()=>{
        if (lockboard) return;
        if (cardCombo.includes(card)) return;

        card.classList.add("flipped");
        cardAttributes.push(card.getAttribute("data-card"))
        cardCombo.push(card)

        if (cardCombo.length === 2) {
            if (cardAttributes[0] === cardAttributes[1]){
                flippedCardsCombos.push([...cardCombo]);
                cardAttributes = [];
                cardCombo = [];
            }
            else {
                lockboard = true
                setTimeout(() => {
                cardCombo[0].classList.remove("flipped");
                cardCombo[1].classList.remove("flipped");
                cardCombo = [];
                cardAttributes = [];
                lockboard = false;
                },600)

            }
        }
    })
}





