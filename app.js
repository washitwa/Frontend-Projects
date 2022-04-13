var ch = document.querySelector(".character");
var ball = document.getElementById("cl");
var x = document.querySelector(".container");
var ob = document.querySelector(".obstacle");
var block = document.getElementById("obs");
var score = document.querySelector(".score");
var pau = document.querySelector(".pause");
var rest = document.querySelector(".restart");
var msg = document.querySelector(".message");

var a = 0;
var b = 0;
var c = 0;
var xoxo1;
var xoxo2;
var xoxo3;
var blockLeft;

x.addEventListener("click", hop);
rest.addEventListener("click", again);
pau.addEventListener("click",start);

function hop(){
    ch.classList.add("effects");
    setTimeout(function(){
        ch.classList.remove("effects");
    }, 400);
}

function again(){
    ball.style.backgroundColor = "red";
    ob.style.backgroundColor = "blue";  
    ob.classList.remove("effects1"); 
    a = 0;
    score.innerHTML = 0;
}

function start(){
    if(b%2==0){
        pau.innerHTML = "Pause";
        game();
    }else{
        pau.innerHTML = "Resume";
        c++;
        stopEverything();
    }
    b++;
}
function game(){
    xoxo1 = setInterval(function(){
        ob.classList.add("effects1");
        var charTop = parseInt(window.getComputedStyle(ch).getPropertyValue("top"));
        blockLeft = parseInt(window.getComputedStyle(ob).getPropertyValue("left"));
    
        if(blockLeft<40 && blockLeft>0 && charTop>225){ 
            ob.classList.remove("effect1"); 
            ball.style.backgroundColor = "black";
            ob.style.backgroundColor = "yellow";      
            msg.innerHTML = "Your Last Score: "+a;
            score.innerHTML = 0;
            a = 0;
            xoxo3 = setTimeout(function(){
                ball.style.backgroundColor = "red";
                ob.style.backgroundColor = "blue";
            },800);
        }
    },30);

    xoxo2 = setInterval(function() {
        a = a + 1;
        score.innerHTML = a;
    }, 500);
    
}
function stopEverything(){
    clearInterval(xoxo1);
    clearInterval(xoxo2);
    ob.classList.remove("effects1");
    block.style.left = `${blockLeft}px`;
}