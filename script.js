movies = [
    let popularMovies = [
    "Inception",
    "Interstellar",
    "The Dark Knight Rises",
    "La La Land",
    "Mad Max Fury Road",
    "Gravity",
    "The Avengers",
    "The Revenant",
    "Django Unchained",
    "The Wolf of Wall Street",
    "Black Panther",
    "Avatar",
    "The Martian",
    "Whiplash",
    "Gone Girl",
    "Birdman",
    "The Shape of Water",
    "Her",
    "Drive",
    "Arrival",
    "Moonlight",
    "Zero Dark Thirty",
    "Boyhood",
    "Inside Out",
    "Spotlight",
    "Blade Runner",
    "Get Out",
    "A Star Is Born",
    "The Irishman",
    "1917",
    "Parasite",
    "Joker",
    "Argo",
    "Moonrise Kingdom",
    "Hereditary",
    "Lady Bird",
    "First Man",
    "Ex Machina",
    "Black Swan",
    "The Descendants",
    "The Help",
    "Moneyball",
    "The Artist",
    "Up",
    "District 9",
    "Slumdog Millionaire",
    "No Country for Old Men",
    "The Departed",
    "Brokeback Mountain",
    "Gladiator",
    "The Sixth Sense",
    "Rain Man",
    "Platoon",
    "Amadeus"
];

]

let max=27;
let randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
let count=0;
let masterCount =0;
let letterCount = 0;
let correctCount=0;
let wrongCount=0;
let hangmanCount = 1;
let found=false;
let timer = 0;
let duration = 150;
let start = countdownTimer(duration);
console.log(movies[randomNumber]);
movie_select = movies[randomNumber].toUpperCase();
console.log(movie_select);
let audio;
function reloadHangman() {
    // Simulate asynchronous data fetching or any updates
    setTimeout(() => {

        console.log(1);   
        document.querySelector('#hm1').style.textDecoration = 'none';
        document.querySelector('#hm1').style.opacity = 1;
        
        document.querySelector('#hm2').style.textDecoration = 'none';
        document.querySelector('#hm2').style.opacity = 1;

        document.querySelector('#hm3').style.textDecoration = 'none';
        document.querySelector('#hm3').style.opacity = 1;

        document.querySelector('#hm4').style.textDecoration = 'none';
        document.querySelector('#hm4').style.opacity = 1;

        document.querySelector('#hm5').style.textDecoration = 'none';
        document.querySelector('#hm5').style.opacity = 1;

        document.querySelector('#hm6').style.textDecoration = 'none';
        document.querySelector('#hm6').style.opacity = 1;

        document.querySelector('#hm7').style.textDecoration = 'none';
        document.querySelector('#hm7').style.opacity = 1;
        

    }, 500); // Simulate a delay (e.g., AJAX request delay)
}

function reloadCanvas(){

    movies = movies.filter(item => item !== movie_select);
    max--;
    randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    movie_select = movies[randomNumber].toUpperCase();
    console.log(movie_select);
    
    document.querySelector('.small-arena').innerHTML = "";
    document.querySelector('.arena').innerHTML = "";
    correctCount=0;
    letterCount=0;
    masterCount =0;
    count=0;
    hangmanCount=1;

    console.log(`master:count->${masterCount}`);
    movie_select.split('').forEach(letter => {
    
        if(letter==" "){
            count++;
            if(count==2){
                console.log("wow");
            }
            else if(count>2){
                document.querySelector('.small-arena').innerHTML += `<div class='blocks empty' id=${masterCount}></div>`
            }
            else{
                document.querySelector('.arena').innerHTML += `<div class='blocks empty' id=${masterCount}></div>`
            }
        }
        else{
            letterCount++;
            if(count>=2){
                document.querySelector('.small-arena').innerHTML += `<div class='blocks non-empty' id=${masterCount}></div>`
            }
            else{
                document.querySelector('.arena').innerHTML += `<div class='blocks non-empty' id=${masterCount}></div>`
            }
        }
        masterCount++;
    });

    
    
        

}
function reloadKeyboard(){

    document.querySelectorAll('.keyboard-but').forEach(element => {
        element.style.background = '#777676';
        element.addEventListener('click',buttonClick);
    });
}


function countdownTimer(duration) {
    let  minutes, seconds;
    timer += duration;
    
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if(timer>30){
            document.querySelector('.time').style.color = 'green';
            document.getElementById('ExactTime').textContent = minutes + ':' + seconds;
        }
        else{
            
            document.querySelector('.time').style.color = 'red';
            document.getElementById('ExactTime').textContent = minutes + ':' + seconds;
            document.querySelector('.submitans').style.backgroundColor = 'red';
        }

        if (--timer < 0) {
            clearInterval(intervalId);
            lose();
        }
    }, 1000);
    return intervalId
}

function lose(){
    document.querySelector('.writer').style.display = 'none';
    document.querySelector('.big-arena').innerHTML = `<p class='gameover'>You missed <br> <b>${movie_select}</b><button type='submit' class='retry' onclick='reload()'>TRY AGAIN</button></p>`;
    audio = new Audio('bl.wav')
    audio.play();
}


buttonClick = (event) =>{
    
    const but = event.target;
    but.removeEventListener('click',buttonClick);
    for (let i = 0; i < movie_select.length; i++) {
        if (movie_select[i] === but.id) {
            found = true;

            document.getElementById(i).innerHTML = `<p>${but.id}</p>`
            document.getElementById(i).style.background = "lightgreen";
            but.style.background= '#2E8B57';
            correctCount++
            if(correctCount==letterCount){
               
               let score =  document.getElementById("score-count").textContent;
               score++;
               document.getElementById("score-count").textContent = score;
               reloadHangman();
               reloadCanvas();
               reloadKeyboard();
               audio = new Audio('mainwin.wav')
               audio.play();
               break;
            }
            else{
                audio = new Audio('smallwn.wav')
                audio.play();
            }
        }
       
    }
    if(!found){
        console.log(document.getElementById(`hm${hangmanCount}`));
        document.getElementById(`hm${hangmanCount}`).style.textDecoration = "line-through";
        document.getElementById(`hm${hangmanCount}`).style.opacity= 0.5;
        document.getElementById(`hm${hangmanCount}`).style.textDecorationColor = 'rgba(255, 0, 0, 1)';
        but.style.background='red';
        
        if(hangmanCount==7){
            clearInterval(start);
            lose();
        }
        else{
            audio = new Audio('sl.wav')
            audio.play();
            hangmanCount++;
            clearInterval(start);
            start = countdownTimer(-5);
        }
        
    }
    else{
        
        clearInterval(start);
        start = countdownTimer(10);
    }
    found = false;
}




movie_select.split('').forEach(letter => {
    
    if(letter==" "){
        count++;
        if(count>2){
            document.querySelector('.small-arena').innerHTML += `<div class='blocks empty' id=${masterCount}></div>`
        }
        else{
            document.querySelector('.arena').innerHTML += `<div class='blocks empty' id=${masterCount}></div>`
        }
    }
    else{
        letterCount++;
        if(count>=2){
            document.querySelector('.small-arena').innerHTML += `<div class='blocks non-empty' id=${masterCount}></div>`
        }
        else{
            document.querySelector('.arena').innerHTML += `<div class='blocks non-empty' id=${masterCount}></div>`
        }
    }

    masterCount++;
    
});

eventful = document.querySelectorAll('.keyboard-but').forEach(but => {
    
    
    but.addEventListener('click',buttonClick);
    

})

function submitButton(){
    console.log(document.querySelector('.answersubmit').value.toUpperCase());
    if(document.querySelector('.answersubmit').value.toUpperCase()==movie_select){
        let score =  document.getElementById("score-count").textContent;
        score++;
        document.getElementById("score-count").textContent = score;
        reloadHangman();
        reloadCanvas();
        reloadKeyboard();
        document.querySelector('.answersubmit').value = '';
        audio = new Audio('mainwin.wav')
        audio.play();
            // Clear the input field
    }
    else{
        console.log(document.getElementById(`hm${hangmanCount}`));
        document.getElementById(`hm${hangmanCount}`).style.textDecoration = "line-through";
        document.getElementById(`hm${hangmanCount}`).style.opacity= 0.5;
        document.getElementById(`hm${hangmanCount}`).style.textDecorationColor = 'rgba(255, 0, 0, 1)';
        
        if(hangmanCount==7){
            clearInterval(start);
            lose();
        }
        else{
            audio = new Audio('sl.wav')
                audio.play();
            hangmanCount++;
            clearInterval(start);
            start = countdownTimer(-5);
        }
    }
}
function reload(){
    location.reload();
}
