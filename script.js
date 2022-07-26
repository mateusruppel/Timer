var sec = 00 
var min = 00
var hours = 00

var lsec = 00 
var lmin = 00 
var lhours = 00

var tsec = 00 
var tmin = 00
var thours = 00

var psec = 00 
var pmin = 00
var phours = 00


var cron
var cron2
var cron3
var test = document.getElementById("time");
var min_text = document.getElementById("min");
var saved_time = 0;
var isRunning = false; 
var Paused = false; 
var isLogged = false; 

window.onload = logar;
console.log(test)

//#region aaa

function start() {
    // console.log("chamou");
    if(isRunning == false) {
        
        cron = setInterval(() => {
            timer(lsec, lmin, lhours)
            
        }, 1000)
        isRunning = true;
        Paused = false;

        saved_time +=  sec + Math.floor(60 * min)
        console.log(saved_time)
        
        
        
        
        
        
        
        
        clear_time()
        
        console.log("log"+ isLogged + " running" + isRunning + "pause" + Paused)
        
        clearInterval(cron2)
        clearInterval(cron3)
        test.dataset.content = "Tempo Trabalhando"
        
        
        /*
        document.getElementById("btn-3").style.backgroundColor = "#ff2f2f";
        document.getElementById("time").innerHTML = "Tempo em pausa : 00:00:00";
        document.getElementById("btn-4").style.backgroundColor = "white";
        */
       
       
       
       
       
    }
}


function logar() {
    //  console.log("chamou");
    if(isLogged == false && isRunning == false) {
        
        cron2 = setInterval(() => {
            timer(tsec, tmin, thours)
            console.log(tsec + " " + tmin + " " + tmin + " " + thours)
            
        }, 1000)
        
        isLogged = true;
        console.log("log"+ isLogged + " running" + isRunning + "pause" + Paused)
        test.dataset.content = "Tempo Conectado"
        console.log(test)
        saved_time +=  sec + Math.floor(60 * min) + Math.floor(3600*hours)
        console.log(saved_time)
    }
}

function pause() {
    
    
    if(isRunning == true && Paused == false) {
        saved_time +=  sec + Math.floor(60 * min)
        console.log(saved_time)
        clear_time()
        cron3 = setInterval(() => {
            timer(psec, pmin, phours)
            
        }, 1000)
        isRunning = false;
        Paused = true
        test.dataset.content = "Tempo em Pausa"
        
        
        
        
        clearInterval(cron)
        clearInterval(cron2)
        timer(psec, pmin, phours)
        
        console.log("log"+ isLogged + " running" + isRunning + "pause" + Paused)
        
    }
}

function deslogar(){
    clearInterval(cron2)
    clearInterval(cron3)
    isLogged = false;
    Paused = false;
    console.log("log"+ isLogged + " running" + isRunning + "pause" + Paused)
    document.getElementById("btn-1").style.backgroundColor = "white";
    document.getElementById("btn-3").style.backgroundColor = "white";
    document.getElementById("btn-4").style.backgroundColor = "white";
    stop()
}

function hide(hided, id ){
    
    if(!hided){
        document.getElementById(id).style.display = "none";
        hided = true;
    } 
    else {
        hided = false;
        document.getElementById(id).style.display = "grid";
    }
    
    console.log("hide")
}

function stop() {
    
    /*  
    if(isLogged) {
        pause()
    }*/
    var format = 
    (hours < 10 ? "0" + hours : hours) +
    ":" + 
    (min < 10 ? "0" + min : min) +
    ":" + 
    (sec < 10 ? "0" + sec : sec)
    
    
    saved_time = saved_time + (hours * 3600) + (min * 60) + sec
    var savedSec = 00
    var savedMin = 00
    var savedHours = 00
    
    
    if(savedSec < 60){
        //       console.log(savedSec+"test")
        savedMin = Math.floor( saved_time / 60)
        savedSec= saved_time % 60
        //  console.log(savedSec+"test")
    }  
    
    if(savedMin > 59){
        savedHours = Math.floor(savedMin/60);
        savedMin = savedMin % 60;
    }

    var format2 = 
    (savedHours < 10 ? "0" + savedHours : savedHours) +
    ":" + 
    (savedMin < 10 ? "0" + savedMin : savedMin) +
    ":" + 
    (savedSec < 10 ? "0" + savedSec : savedSec)
    
/*    document.getElementById("saved_time").innerHTML = format2;*/

//    console.log("savedSeconds : " + savedSec)
  //  console.log("savedMinutes : " + savedMin)
   // console.log("savedH : " + savedHours)

    
 //   console.log(format2 +"  aaa");
    
//    console.log(saved_time);
    clearInterval(cron)
    hours = 0
    min = 0
    sec = 0
    
    document.getElementById("time").innerHTML = "00:00:00";
 /*   if(Paused == false) document.getElementById("time-pause").innerHTML = "Tempo em Pausa : 00:00:00";*/
    isRunning = false;
    console.log("log"+ isLogged + " running" + isRunning + "pause" + Paused)
    
}



function timer(_sec, _min, _hours){
    
    sec ++
    
   
    if(sec > 59){
        sec = 0;
        min ++;
    }
    
    if(min > 59){
        min = 0;
        hours ++;
    }

    _sec = sec
    _min = min
    _hours = hours


    var format = 
    (_hours < 10 ? "0" + _hours : _hours) +
    ":" + 
    (_min < 10 ? "0" + _min : _min) +
    ":" + 
    (_sec < 10 ? "0" + _sec : _sec)




   
    var div=   document.getElementById("time")
    div.innerText = format

    
}



function clear_time(){

    sec = 0
    min = 0
    hours = 0    

    var div=   document.getElementById("time")
    div.innerText= "00:00:00"
}


//#endregion