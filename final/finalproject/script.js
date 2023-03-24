(function() {
    'use strict';
    console.log('reading js');

    // sets up the variables to be used later
    const startGame = document.getElementById('startgame');
    const actionText = document.getElementById('actionText');
    const quitBtn = document.getElementById('quitBtn');

    const p1Section = document.getElementById('p1Section');
    const p2Section = document.getElementById('p2Section');
    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');
    const buttons1 = document.getElementById('buttons1');
    const buttons2 = document.getElementById('buttons2');

    const diceSound = new Audio('media/diceRoll.mp3');
    const winSound = new Audio('media/win.mp3');

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // starts and sets up the game when the user clicks the start game button
    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        quitBtn.className = "showing";
        startGame.className = "hidden";

        score1.innerHTML = '0';
        score2.innerHTML = '0';

        setUpTurn();

    });

    // checks for when quit button is clicked and restarts the page
    quitBtn.addEventListener("click", function() {
        location.reload();
    });

    // function that starts each turn
    function setUpTurn() {

        buttons1.innerHTML = '';
        buttons2.innerHTML = '';
        actionText.innerHTML = '';

        // sets up buttons depending on whose turn it is
        if (gameData.index === 0) {
            p1Section.style.backgroundColor = "#F4F4F4";
            p2Section.style.backgroundColor = "#CFCCC8";
            buttons1.innerHTML = '<button id="roll">Roll</button>';

            document.getElementById('roll').addEventListener('click', function() {
                throwDice();
            });
        } else if (gameData.index === 1) {
            p1Section.style.backgroundColor = "#CFCCC8";
            p2Section.style.backgroundColor = "#F4F4F4";
            buttons2.innerHTML = '<button id="roll">Roll</button>';
            document.getElementById('roll').addEventListener('click', function() {
                throwDice();
            });
        }
    };

    // function that rolls the dice for the user 
    function throwDice() {
        diceSound.play();
        
        actionText.innerHTML = '';
        dice.innerHTML = '';
    
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    
        dice.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">`;
    
        if (gameData.roll1 === 1) {
            // if a player rolls 1, switches to the other player
            console.log("a 1 was rolled");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            actionText.innerHTML += `<p>Don't kill Master Piggy! switching to ${gameData.players[gameData.index]}</p>`;
    
            buttons1.innerHTML = '';
            buttons2.innerHTML = '';
    
            setTimeout(setUpTurn, 2000);
    
        } else {
            // game proceeds if roll is not a 1
            console.log("the game proceeds")
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.roll1;
    
            // changes buttons and proceeds with game depending on whose turn it is
            if (gameData.index === 0) {
                buttons1.innerHTML = '<button id="roll">Roll</button> <button id="pass">Pass</button>';
    
                document.getElementById('roll').addEventListener('click', function() {
                    throwDice();
                });
    
                document.getElementById('pass').addEventListener('click', function() {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
    
                checkWinningCondition();
    
    
            } else if (gameData.index === 1) {
                buttons2.innerHTML = '<button id="roll">Roll</button> <button id="pass">Pass</button>';
    
                document.getElementById('roll').addEventListener('click', function() {
                    throwDice();
                });
    
                document.getElementById('pass').addEventListener('click', function() {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
    
                checkWinningCondition();
    
            }
    
    
        }
    }
    
    // function that checks if player won or not and ends game if a player wins
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            winSound.play();
            
            actionText.innerHTML = `<h2>${gameData.players[gameData.index]} saves our Master with ${gameData.score[gameData.index]} points!</h2>`;

            buttons1.innerHTML = '';
            buttons2.innerHTML = '';

            showCurrentScore();

            quitBtn.innerHTML = 'START A NEW GAME?';


        } else {
            showCurrentScore();
        }
    };

    // function that prints what each player's score is
    function showCurrentScore() {
        score1.innerHTML = `${gameData.score[0]}`
        score2.innerHTML = `${gameData.score[1]}`
    }

    
    // code for showing the info overlay and info button
    const infoBtn = document.querySelector("#infoBtn")
    infoBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("infoOverlay").className = "showing";
    });
    document.querySelector("#backBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("infoOverlay").className = "hidden";
    });

}());