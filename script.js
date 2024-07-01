movies = [
    "Sholay",
    "Dilwale Dulhania Le Jayenge",
    "3 Idiots",
    "Lagaan",
    "Kabhi Khushi Kabhie Gham",
    "Kuch Kuch Hota Hai",
    "Taare Zameen Par",
    "Gully Boy",
    "Dangal",
    "Queen",
    "Zindagi Na Milegi Dobara",
    "Bajrangi Bhaijaan",
    "Gully Boy",
    "Barfi",
    "Swades",
    "Munna Bhai MBBS",
    "Dil Chahta Hai",
    "Black",
    "Veer Zaara",
    "Padmaavat",
    "PK",
    "Gangs of Wasseypur",
    "Bajirao Mastani",
    "Andaz Apna Apna",
    "Golmaal",
    "Deewaar",
    "Chak De India",
    "Raazi",
    "Jab We Met",
    "Om Shanti Om",
    "Hum Aapke Hain Koun",
    "Dabangg",
    "Dil Se",
    "My Name is Khan",
    "Devdas",
    "Piku",
    "Rockstar",
    "Rang De Basanti",
    "Singham",
    "Stree",
    "Mughal E Azam",
    "Anand",
    "Padosan",
    "Pyaasa",
    "Guide",
    "Mother India",
    "Amar Akbar Anthony",
    "Don",
    "Coolie",
    "Shree 420",
    "Jo Jeeta Wohi Sikandar",
    "A Wednesday",
    "Dil To Pagal Hai",
    "Kaho Naa Pyaar Hai",
    "Kabir Singh",
    "Bhool Bhulaiyaa",
    "Housefull",
    "Student of the Year",
    "Yeh Jawaani Hai Deewani",
    "Aashiqui 2",
    "Dhoom",
    "Tanu Weds Manu",
    "Hindi Medium",
    "Secret Superstar",
    "Sanju",
    "Kaabil",
    "Ae Dil Hai Mushkil",
    "Badhaai Ho",
    "Dear Zindagi",
    "Golmaal Again",
    "Maine Pyar Kiya",
    "Tezaab",
    "Trishul",
    "Satyam Shivam Sundaram",
    "Seeta Aur Geeta",
    "Kabhi Alvida Naa Kehna",
    "Ek Tha Tiger",
    "Bahubali",
    "Karan Arjun",
    "Mohabbatein",
    "Jodhaa Akbar",
    "Ra One",
    "Ghajini",
    "Singh is Kinng",
    "Partner",
    "Race",
    "Baby",
    "Special 26",
    "Rowdy Rathore",
    "Housefull 2",
    "Baadshah",
    "Koi Mil Gaya",
    "Krissh",
    "Jism",
    "Murder",
    "Raaz",
    "Race 2",
    "Bang Bang",
    "War",
    "Dishoom"
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