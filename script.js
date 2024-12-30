let btnRoll = document.getElementById('btn--roll');
let btnHold = document.getElementById('btnHold');
let dice = document.getElementById('dice');


let activePlayer = 0;


console.log(btnRoll);
console.log(dice);

let currentScore = 0;

let playerScore = [0, 0];


btnRoll.addEventListener('click', () => {

    let randDice = Math.trunc((Math.random() * 6) + 1);

    if (randDice == 1) {

        dice.src = `dice-${randDice}.png`;




        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer == 0 ? 1 : 0

        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');


    }
    else {

        dice.classList.remove('hidden')
        dice.src = `dice-${randDice}.png`;

        currentScore = randDice + currentScore;
        document.getElementById(`current--${activePlayer}`).innerText = currentScore;
    }
    console.log(currentScore);
    console.log(randDice);

})








btnHold.addEventListener('click', () => {

    playerScore[activePlayer] = playerScore[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).innerText = playerScore[activePlayer];

    if (playerScore[activePlayer] >= 20) {
        document.getElementById('winner--img').style.display = 'block';
        document.getElementById(`btn-play-again`).style.display = 'block';
        document.getElementById(`btn--roll`).style.display = 'none';
        dice.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }
    else {

        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer == 0 ? 1 : 0

        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }






})


document.getElementById(`btn-play-again`).addEventListener('click',()=>{
    currentScore = 0;
    playerScore = [0,0];
    dice.classList.add('hidden');
    document.getElementById(`current--0`).innerHTML = currentScore;
    document.getElementById(`current--1`).innerHTML = currentScore;
    document.getElementById(`score--0`).innerText = 0;
    document.getElementById(`score--1`).innerText = 0;
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.getElementById('winner--img').style.display = 'none';
    document.getElementById(`btn-play-again`).style.display = 'none';
    document.getElementById(`btn--roll`).style.display = 'block';
})



document.getElementById('restart').addEventListener('click',()=>{



    currentScore = 0;
    playerScore = [0,0];
    activePlayer = 0;
    dice.classList.add('hidden');
    document.getElementById(`current--0`).innerHTML = currentScore;
    document.getElementById(`current--1`).innerHTML = currentScore;
    document.getElementById(`score--0`).innerText = 0;
    document.getElementById(`score--1`).innerText = 0;
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');


});