
function ageInDays(){
    var birthYear = prompt("What is your birth year?");
    var ageDays =(2020 - birthYear)*365;

    if (document.getElementById('ageInDays') != null){
        document.getElementById('ageInDays').remove();
    }
    var h1 = document.createElement('h1');
    if (ageDays >= 0){
        var textAnswer = document.createTextNode('You are '+ ageDays + ' days old my friend.');
    }
    else{
        var textAnswer = document.createTextNode('Are you really from future, my friend ?');
    }
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    // console.log(ageDays)
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


function catGenerator(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://placekitten.com/250/150";
    div.appendChild(image);
}



function rpsGame(yourChoice){
    var humanChoice = yourChoice.id;
    var botChoice = randomRPS();
    var decision = decide(humanChoice, botChoice);
    var final = result(decision);
    show_result(humanChoice, final, botChoice);
    console.log(final);
}

function randomRPS(){
    let rps = ['rock', 'paper', 'scissor'];
    let choice = Math.floor(Math.random()*3);
    console.log(choice);
    return rps[choice];
}

function decide(rps1, rps2){

    let rps = ['rock', 'paper', 'scissor'];
    let h = rps.indexOf(rps1);
    let b = rps.indexOf(rps2);

    console.log([h, b]);
    if (h == b){
        return 0.5;
    }
    else if( [h, b].sort().join('') == '02'){
        if (h < b){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
        if (h > b){
            return 1;
        }
        else{
            return 0;
        }        
    }
}

function result(decision){

    var final = { "message" : null, "color" : null}

    if (decision == 0){
        final.message = "You lost!!!";
        final.color = "red";
    }
    else if (decision == 1){
        final.message = "You won!!!";
        final.color = "green";
    }
    else{
        final.message = "Its tied!!!";
        final.color = "blue";
    }

    return final;
}

function show_result(humanChoice, final, botChoice){

    var imageDatabase = {
        'rock' :  document.getElementById('rock') ,
        'paper' : document.getElementById('paper'),
        'scissor' : document.getElementById('scissor'),
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div'); 
    var botDiv = document.createElement('div');
    var resultDiv = document.createElement('div');

    humanDiv.append(imageDatabase[humanChoice].cloneNode(true));
    humanDiv.setAttribute('style', 'box-shadow: 8px 10px 50px rgba(10, 0, 228, 0.7);'); 

    botDiv.append(imageDatabase[botChoice].cloneNode(true));
    botDiv.setAttribute('style', 'box-shadow: 8px 10px 50px rgba(228, 0, 10, 0.7);');  

    resultDiv.innerHTML = "<h1 style='color:" + final.color + ";'>" + final.message + "</h1>";

    document.getElementById('flex-box-rps').append(humanDiv);
    document.getElementById('flex-box-rps').append(resultDiv);
    document.getElementById('flex-box-rps').append(botDiv);
}



let allButtons = document.getElementsByTagName("button"); 
let copiedButtons = []
for ( let i = 0; i < allButtons.length; i++){
    copiedButtons.push(allButtons[i].classList[1]);
}

function bottonColorChange(chosenOption){
    if (chosenOption.value == "green"){
        for ( let i = 0; i < allButtons.length; i++){
            btnClass = allButtons[i].classList[1]
            allButtons[i].classList.remove(btnClass)
            allButtons[i].classList.add("btn-success")
        }
    }
    else if (chosenOption.value == "red"){
        for ( let i = 0; i < allButtons.length; i++){
            btnClass = allButtons[i].classList[1]
            allButtons[i].classList.remove(btnClass)
            allButtons[i].classList.add("btn-danger")
        }
    }
    else if (chosenOption.value == "reset"){
        for ( let i = 0; i < allButtons.length; i++){
            btnClass = allButtons[i].classList[1];
            originalBtnClass = copiedButtons[i];
            console.log(originalBtnClass);
            allButtons[i].classList.remove(btnClass);
            allButtons[i].classList.add(originalBtnClass);
        }
    }
    else{
        for ( let i = 0; i < allButtons.length; i++){
            let btnClass = allButtons[i].classList[1];
            let randomChoice = Math.floor(Math.random()*4)
            let randomBtnClass = copiedButtons[randomChoice];
            console.log(randomBtnClass);
            allButtons[i].classList.remove(btnClass);
            allButtons[i].classList.add(randomBtnClass);
        }
    }
    console.log(copiedButtons[1]);
}


