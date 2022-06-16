const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const bears = document.querySelectorAll('.bear');
const countdownTimer = document.querySelector(".timer");
const whackSound = document.getElementById("urukaGun");
let soundOn = true;
let lastHole;
let timeUp = true;
let score = 0;
let time = 20;

function toggleSound() {
    soundOn = soundOn ? false : true;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(450, 950);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function timer() {
    if(time>0){
        setTimeout(() =>{
            time--;
            countdownTimer.textContent = "Time: " + time;
            console.log('time', time);
            timer();
        }, 1000);
    }
}

function startGame() {
    if(timeUp){
        scoreBoard.textContent = "Score: 0";
        timeUp = false;
        time = 20;
        countdownTimer.textContent = "Time: " + time;
        score = 0;
        document.querySelector(".game").scrollIntoView();
        timer();
        peep();
        setTimeout(() => timeUp = true, 20000)
    }
}

function whack(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    this.firstChild.src="images/Uruka2_.png";
    // setInterval(() => this.firstChild.src="images/Uruka1_.png", 400);
    setTimeout(() => this.firstChild.src="images/Uruka1_.png", 400);
    if(whackSound && soundOn){
        whackSound.play();
    }
    scoreBoard.textContent = "Score: " + score;
}

bears.forEach(bear => bear.addEventListener('click', whack));