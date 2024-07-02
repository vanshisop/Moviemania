const movies = [
    "The Godfather",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Dark Knight",
    "Fight Club",
    "The Matrix",
    "Goodfellas",
    "Interstellar",
    "Gladiator",
    "Braveheart",
    "Scarface",
    "Django Unchained",
    "The Departed",
    "Shutter Island",
    "The Revenant",
    "The Prestige",
    "Memento",
    "Inglourious Basterds",
    "Mad Max Fury Road",
    "Whiplash",
    "La La Land",
    "Titanic",
    "Avatar",
    "Jurassic Park",
    "The Lion King",
    "Toy Story",
    "Finding Nemo",
    "Frozen",
    "The Incredibles",
    "Up",
    "Ratatouille",
    "WALL E",
    "Coco",
    "Inside Out",
    "Zootopia",
    "Moana",
    "Big Hero",
    "Monsters Inc",
    "Brave",
    "Cars",
    "A Bug's Life",
    "The Avengers",
    "Iron Man",
    "Thor",
    "Captain America",
    "Black Panther",
    "Doctor Strange",
    "Guardians of the Galaxy",
    "Ant Man",
    "Spider Man",
    "Wonder Woman",
    "Aquaman",
    "Justice League",
    "Man of Steel",
    "The Batman",
    "The Flash",
    "Shazam",
    "Suicide Squad",
    "Deadpool",
    "Logan",
    "X Men",
    "The Wolverine",
    "The Irishman",
    "Once Upon a Time",
    "Knives Out",
    "Joker",
    "Parasite",
    "The Social Network",
    "The Wolf of Wall Street",
    "Birdman",
    "Gravity",
    "Argo",
    "Life of Pi",
    "Silver Linings Playbook",
    "The King's Speech",
    "Inglourious Basterds",
    "No Country for Old Men",
    "There Will Be Blood",
    "The Departed",
    "Brokeback Mountain",
    "Million Dollar Baby",
    "The Lord of the Rings",
    "Harry Potter",
    "Pirates of the Caribbean",
    "The Bourne Identity",
    "The Hunger Games",
    "Divergent",
    "Twilight",
    "The Maze Runner",
    "The Fault in Our Stars",
    "The Great Gatsby",
    "Les Misérables",
    "The Curious Case of Benjamin Button",
    "Slumdog Millionaire",
    "The Grand Budapest Hotel",
    "Moonlight",
    "La La Land",
    "Green Book"
];




let max=99;
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
        clearInterval(start);
        start = countdownTimer(20)
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
