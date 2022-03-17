// Obtener botones rock, paper o scissors
let choiceRock = document.querySelector('.rockPlayer1');
let choicePaper = document.querySelector('.paperPlayer1');
let choiceScissor = document.querySelector('.scissorPlayer1');
let restartButton = document.querySelector('.restart-button');

// Obtener contenedores de puntajes
let resultPlayer1 = document.querySelector('.player-1-result');
let resultPc = document.querySelector('.player-2-result');


// Función para reiniciar el puntaje
restartButton.addEventListener('click', function() {
    resultPlayerCounter = 0;
    resultPcCounter = 0;
    resultPlayer1.innerHTML = resultPlayerCounter;
    resultPc.innerHTML = resultPcCounter;
});

// Obtener modal
let resultModal = document.querySelector('.modal');

// Función para cerrar modal
resultModal.addEventListener('click', function() {
    resultModal.classList.toggle('active');
});
    
// Inicializar contadores de puntaje
let resultPlayerCounter = 0;
let resultPcCounter = 0;


// Insertar los contadores en 0 al DOM
resultPc.innerHTML = resultPcCounter;
resultPlayer1.innerHTML = resultPlayerCounter;

// Generar la jugada random de la PC
function randCpuChoice () {
    pcChoice = 0;
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

// Variable con la jugada random de la PC
let pcChoice = randCpuChoice();


// Variable con la jugada del humano
let playerChoice;

// *** Elección jugada del humano

// El humano elige rock
choiceRock.addEventListener('click', function() {
    playerChoice = 'rock';
    getResult()
});

// El humano elige paper
choicePaper.addEventListener('click', function() {
    playerChoice = 'paper';
    getResult()
});

// El humano elige scissors
choiceScissor.addEventListener('click', function() {
    playerChoice = 'scissors';
    getResult()
});

// Obtener elemento de mensaje con feedback de jugada
let resultMessage = document.querySelector('.result-message');


// *** Funciones con resultados

// Empate
function draw(){
    resultMessage.innerHTML = ("It's a draw because both chose " + pcChoice);
    resultModal.classList.toggle('active');
    pcChoice = randCpuChoice()
}

// Gana la PC
function pcWin(){
    resultPcCounter ++;
    resultPc.innerHTML = resultPcCounter;
    resultMessage.innerHTML = ('Computer win because chose ' + pcChoice + ' and you chose ' + playerChoice);
    resultModal.classList.toggle('active');
    pcChoice = randCpuChoice();
}

// Gana el humano
function playerWin(){
    resultPlayerCounter ++;
    resultPlayer1.innerHTML = resultPlayerCounter;
    resultMessage.innerHTML = ('You win because chose ' + playerChoice + ' and the Computer chose ' + pcChoice);
    resultModal.classList.toggle('active');
    pcChoice = randCpuChoice()
}

// Función con lógica de jugada

function getResult() {
    switch (true) {
        case pcChoice === playerChoice:
            draw()
        break;
        case pcChoice === 'rock' && playerChoice === 'scissors':
        case pcChoice === 'paper' && playerChoice === 'rock':
        case pcChoice === 'scissors' && playerChoice === 'paper':
            pcWin()
        break;
        case playerChoice === 'rock' && pcChoice === 'scissors':
        case playerChoice === 'paper' && pcChoice === 'rock':
        case playerChoice === 'scissors' && pcChoice === 'paper':
            playerWin()
        break;
    }
}