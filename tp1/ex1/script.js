function game() {
    const b = document.getElementById("b");
    b.addEventListener("click", difficulty);
}

function difficulty() {
    let max;
    let tentatives;
    let diff;
    while (true) {
        diff = prompt("CHOOSE THE DIFFICULTY: \n1: EASY \n(you have 7 attempts to guess a number between 0 and 10) \n2: MEDIUM \n(you have 5 attempts to guess a number between 0 and 50) \n3: HARD \n(you have 3 attempts to guess a number between 0 and 100)");
        if (diff === null) return; 
        diff = parseInt(diff);
        if (diff === 1 || diff === 2 || diff === 3 ) {
            break;
        } else {
            alert("Please choose a valid difficulty");
        }
    }
    
    if (diff === 1) {
        max = 10;
        tentatives = 7;
    } else if (diff === 2) {
        max = 50;
        tentatives = 5;
    } else if (diff === 3) {
        max = 100;
        tentatives = 3;
    }
    let n = Math.floor(Math.random() * max);
    let guess = -1;
    while (guess !== n && tentatives > 0) {
        while (true) {
            guess = prompt("GUESS THE NUMBER BETWEEN 0 AND " + max + " YOU HAVE " + tentatives + " ATTEMPTS LEFT");
            if (guess === null) return;
            if (isNaN(guess)) {
                alert("Please enter a valid number.");
            } 
            else
             {  guess = parseInt(guess);
                if (guess < n) {
                alert("The number is higher");
                tentatives--;
                break;
            } else if (guess > n) {
                alert("The number is lower");
                tentatives--;
                break;
            } else {
                alert("Congratulations, you guessed the number!");
                break;
            }}
        }
    }
    if (tentatives === 0) {
        alert("You lost. The number was " + n);
    }
    let wow=prompt("DO YOU WANT TO REPEAT ?????? \n1: YES \n2: NO");
    if(wow==1){
        difficulty();
    }
    else{
        alert("THANK YOU FOR PLAYING");
    }
}

game();
