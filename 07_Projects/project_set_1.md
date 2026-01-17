# Solution Code

## project 1

```javascript

const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)

  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor= e.target.id
    }
  })
});
<<<<<<< HEAD

```

## project 2 solution


```javascript
const form = document.querySelector('form')

 form.addEventListener('submit',function(e){
   e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')

    if(height ===''|| height <0 || isNaN(height)){
      results.innerHTML=`please give a valid height ${height}`
    }else if(weight ===''|| weight <0 || isNaN(weight)){
      results.innerHTML=`please give a valid weight ${weight}`
    }else{
     const bmi =  (weight/((height*height)/10000)).toFixed(2)
     //show the result
     results.innerHTML =`<span>${bmi}</span>`;
     if(bmi<18.6){
      results.innerHTML=`Under weight ${bmi}`
    }
    else if(bmi>18.6 && bmi<24.9){
    results.innerHTML=`Normal Range ${bmi}`
   }
   else{
     results.innerHTML=`Overweight  ${bmi}`
   }

    }

 });
```
## Project solution 3

```javascript

const clock = document.getElementById('clock');
// or
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();

  // console.log(date.toLocaleTimeString());

clock.innerHTML=date.toLocaleTimeString();

},1000)



## Project solution 4

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let NumGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validation checking whether the value is number and in the range
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('please enter the valid Number');
  } else {
    prevGuess.push(guess);
    if (NumGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over , Random number was ${randomNumber}`);
      EndGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //isnt = if guess you won or high low hints
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right `);
    EndGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low `);
  } else {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  //displaying guesses and cleaning the text
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}   `;
  NumGuess++;
  remaining.innerHTML = ` ${10 - NumGuess}`;
}

function displayMessage(message) {
  //DOM interaction here
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  NewGame();
}

function NewGame() {
  //
  const NewGameButton = document.querySelector('#newGame');
  NewGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML == ` ${10 - NumGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```