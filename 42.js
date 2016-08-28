"use strict";
/*jslint browser: true*/
/*global $, jQuery, alert*/

var Value = 0,
    Score = 0,
    chrono,
    display;

window.onload = function () {
    
    var TransmissionVoice = document.getElementById("Transmission"),
        getValue =  document.getElementById("val"),
        getScore = document.getElementById("score");
   
    getScore.innerHTML = Score;
    getValue.innerHTML = Value;
    TransmissionVoice.play();
    $("#ContainerOverlap").fadeIn(5000);

};

function playStart(audioObj) {
    
    var selectAudio = document.getElementById(audioObj);
    selectAudio.play();
    
}
function playChoice(audioObj2) {
    
    var choiceAudio = document.getElementById(audioObj2);
    choiceAudio.play();
    
}
function Back() {
    
    Value = 0;
    Score = 0;
    var Game = document.getElementById('Game'),
        Intro = document.getElementById('ContainerOverlap'),
        Explosion = document.getElementById('Explosion'),
        getValue = document.getElementById("val"),
        getScore = document.getElementById("score"),
        showAdded = document.getElementById("showNumber"),
        road1 = document.getElementById("SpaceShipRoad1"),
        road2 = document.getElementById("SpaceShipRoad2"),
        Lightspeed = document.getElementById("Lightspeed"),
        ExplosionSound = document.getElementById('audio3'),
        LightspeedSound = document.getElementById("LightSpeed");
    
    LightspeedSound.muted = true;
    Game.style.display = 'none';
    Intro.style.display = 'block';
    getScore.innerHTML = Score;
    getValue.innerHTML = Value;
    showAdded.innerHTML = "";
    road1.style.display = 'none';
    road2.style.display = 'none';
    Lightspeed.style.display = 'none';
    Explosion.style.display = 'none';
    ExplosionSound.muted = true;
    clearInterval(chrono);
    display.textContent = "";
    
}

function Start(obj, obj2) {
    
    var Difficulty = document.getElementById('Difficulty'),
        showGame = document.getElementById(obj2),
        start = document.getElementById(obj),
        loginVoice = document.getElementById("Login"),
        Transmission = document.getElementById("Transmission");
    
    document.getElementById('AudioIntro').muted = true;
    start.style.display = 'none';
    showGame.style.display = 'block';
    loginVoice.play();
    Transmission.muted = true;
    Difficulty.style.display = 'none';
    
}

function showInstructions() {
    
    var Intro = document.getElementById("ContainerOverlap"),
        Instrucions = document.getElementById("Instructions");
    
    Instrucions.style.display = 'block';
    Intro.style.display = 'none';
    
}

function closeInstructions() {
    
    var Instructions = document.getElementById("Instructions"),
        Intro = document.getElementById("ContainerOverlap");
    
    Instructions.style.display = 'none';
    Intro.style.display = 'block';
}

function choice1() {
    var getValue = document.getElementById("val"),
        getAdded = document.getElementById("showNumber"),
        soundError = document.getElementById("Error"),
        getScore = document.getElementById("score"),
        random1 = Math.floor(Math.random() * 8) + 1,
        added =  '+' + random1,
        road1 = document.getElementById("SpaceShipRoad1"),
        road2 = document.getElementById("SpaceShipRoad2"),
        Game = document.getElementById('Game'),
        Intro = document.getElementById('ContainerOverlap'),
        Explosion = document.getElementById('Explosion'),
        Lightspeed = document.getElementById("Lightspeed"),
        LightspeedSound = document.getElementById('LightSpeed');
    
    Value = Value + random1;
    
    
    getValue.innerHTML = Value;
    
    if (Value > 42) {
        Value = 0;
                
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
                
        soundError.play();
                
        if (Score < 0) {
            Score = 0;
            getScore.innerHTML = Score;
        }
    }
            
    if (Value > 36 && Value < 42) {
        getValue.style.color = 'red';
                
    } else if (Value < 36) {
        getValue.style.color = 'white';
                
    } else if (Value === 42) {
        getAdded.innerHTML = Value;
        $("#showNumber").fadeIn(600);
        $("#showNumber").fadeOut(600);
        Value = 0;
        Score += Score;
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
        
        road1.style.display = 'block';
        road2.style.display = 'block';
                
        if (Score === 1) {
            document.getElementById('ScoreContainer').style.backgroundImage = 'url(images/orange.png)';
                    
        } else if (Score === 4) {
            document.getElementById('ScoreContainer').style.backgroundImage = 'url(images/green.png)';
                        
        }
                
                 
                
    } else if (Score === 5) {
                
        Game.style.display = 'none';
        Value = 0;
        Score = 0;
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
        getAdded.innerHTML = "";
        Game.style.display = 'none';
        Lightspeed.style.display = 'block';
        LightspeedSound.play();
        road1.style.display = 'none';
        road2.style.display = 'none';
                
    }
    
           
}

function choice2() {
    
    var getValue = document.getElementById("val"),
        getAdded = document.getElementById("showNumber"),
        soundError = document.getElementById("Error"),
        getScore = document.getElementById("score"),
        random2 =  Math.floor(Math.random() * ((7 - 4) + 1) + 4),
        added =  '+' + random2,
        road1 = document.getElementById("SpaceShipRoad1"),
        road2 = document.getElementById("SpaceShipRoad2"),
        Game = document.getElementById('Game'),
        Intro = document.getElementById('ContainerOverlap'),
        Explosion = document.getElementById('Explosion'),
        Lightspeed = document.getElementById("Lightspeed"),
        LightspeedSound = document.getElementById('LightSpeed');
    
    Value = Value + random2;
    
    
    getValue.innerHTML = Value;
    
   
    
    if (Value > 42) {
                
        Value = 0;
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
                
        soundError.play();
                
        if (Score < 0) {
            Score = 0;
            getScore.innerHTML = Score;
        }
    }
    if (Value > 36 && Value < 42) {
        getValue.style.color = 'red';
                    
    } else if (Value < 36) {
        getValue.style.color = 'white';
                    
    } else if (Value === 42) {
        getAdded.innerHTML = Value;
        $("#showNumber").fadeIn(600);
        $("#showNumber").fadeOut(600);
        Value = 0;
        Score += Score;
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
                
        road1.style.display = 'block';
        road2.style.display = 'block';
                
        if (Score === 1) {
            document.getElementById('ScoreContainer').style.backgroundImage = 'url(images/orange.png)';
                        
        } else if (Score === 4) {
            document.getElementById('ScoreContainer').style.backgroundImage = 'url(images/green.png)';
                        
        }
                                
    } else if (Score === 5) {
                
        Game.style.display = 'none';
        Value = 0;
        Score = 0;
        getScore.innerHTML = Score;
        getValue.innerHTML = Value;
        getAdded.innerHTML = "";
        Game.style.display = 'none';
        Lightspeed.style.display = 'block';
        LightspeedSound.play();
        road1.style.display = 'none';
        road2.style.display = 'none';
                
    }
    
}

function Fold() {
    Value = 0;
    document.getElementById("val").innerHTML = Value;
}

function soundOnOff() {
    document.getElementById('SoundOn').style.backgroundImage = 'url(images/VolumeOff.png)';
    document.getElementById('AudioIntro').muted = !document.getElementById('AudioIntro').muted;
    document.getElementById('LightSpeed').muted = !document.getElementById('LightSpeed').muted;
    document.getElementById('Transmission').muted = !document.getElementById('Transmission').muted;
    document.getElementById('Error').muted = !document.getElementById('Error').muted;
    document.getElementById('Login').muted = !document.getElementById('Login').muted;
    document.getElementById('Alarm').muted = !document.getElementById('Alarm').muted;
    document.getElementById('audio3').muted = !document.getElementById('audio3').muted;

}
function chooseDifficulty() {
    document.getElementById('Difficulty').style.display = 'block';
    document.getElementById("ContainerOverlap").style.display = 'none';
    
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    chrono = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;
        --timer;
        if (timer > 0 && timer < 60 * 0.5) {
            document.getElementById('Game').style.backgroundImage = 'url(images/warning.jpg)';
            document.getElementById('Alarm').play();
        } else if (timer === 0.1) {
            document.getElementById('Alarm').muted = true;
                
        }
        if (timer === 0) {
            
        
            Value = 0;
            Score = 0;
            document.getElementById('Game').style.backgroundImage = 'url(images/normal.jpg)';
            document.getElementById("score").innerHTML = Score;
            document.getElementById("val").innerHTML = Value;
            document.getElementById("showNumber").innerHTML = "";
            document.getElementById("SpaceShipRoad1").style.display = 'none';
            document.getElementById("SpaceShipRoad2").style.display = 'none';
            var hideGame = document.getElementById('Game');
            document.getElementById('audio3').play();
            document.getElementById('Explosion').style.display = 'block';
            document.getElementById('Game').style.display = 'none';
            timer === duration;
        }
        return chrono;
    }, 1000);
}

function clickTimer(Duration) {
    /*var sixMinutes = 60 * 10;*/
    display = document.querySelector('#time');
    startTimer(Duration, display);
}

