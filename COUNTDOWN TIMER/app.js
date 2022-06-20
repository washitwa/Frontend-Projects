var hr = document.getElementById("hour");
var min = document.getElementById("minute");
var sec = document.getElementById("second");
var milsec = document.getElementById("milisec");


hr.addEventListener("click", getHour);
min.addEventListener("click", getMin);
sec.addEventListener("click", getSec);
milsec.addEventListener("click", getMilSec);

var hour_count=1; hr_value = 0;
var min_count=1; min_value = 0;
var sec_count=1; sec_value = 0;
var mil_count=1; mil_value = 0;

function getHour(){
    
    if(hour_count%2==0){
        hr.style.backgroundColor = "white";
        document.removeEventListener("keyup", f1);
    }else{
        hr.style.backgroundColor = "rgb(206, 205, 205)";
        document.addEventListener("keyup", f1);
    }
    
    hour_count++;
}

function f1(event1){     
    if(event1.key ==='ArrowUp'){
        hr_value++;
        document.getElementById("first").innerHTML = hr_value;
    }
    if(event1.key ==='ArrowDown'){
        hr_value--;
        if(hr_value<0)
            hr_value = 0;
        document.getElementById("first").innerHTML = hr_value;
    }
};

function getMin(){
    if(min_count%2==0){
        min.style.backgroundColor = "white";
        document.removeEventListener("keyup", f2);
    }else{
        min.style.backgroundColor = "rgb(206, 205, 205)";
        document.addEventListener("keyup", f2);
    }
    min_count++;
}

function f2(event2){     
    if(event2.key ==='ArrowUp'){
        min_value++;
        if(min_value>=59)
            min_value = 59;
        document.getElementById("secnd").innerHTML = min_value;
    }
    if(event2.key ==='ArrowDown'){
        min_value--;
        if(min_value<0)
            min_value = 0;
        document.getElementById("secnd").innerHTML = min_value;
    }
};
function getSec(){
    if(sec_count%2==0){
        sec.style.backgroundColor = "white";
        document.removeEventListener("keyup", f3);
    }else{
        sec.style.backgroundColor = "rgb(206, 205, 205)";
        document.addEventListener("keyup", f3);
    }
    sec_count++;
}
function f3(event3){     
    if(event3.key ==='ArrowUp'){
        sec_value++;
        if(sec_value>=59)
            sec_value = 59;
        document.getElementById("third").innerHTML = sec_value;
    }
    if(event3.key ==='ArrowDown'){
        sec_value--;
        if(sec_value<0)
            sec_value = 0;
        document.getElementById("third").innerHTML = sec_value;
    }
};
function getMilSec(){
    if(mil_count%2==0){
        milsec.style.backgroundColor = "white";
        document.removeEventListener("keyup", f4);
    }else{
        milsec.style.backgroundColor = "rgb(206, 205, 205)";
        document.addEventListener("keyup", f4);
    }
    mil_count++;
}
function f4(event4){     
    if(event4.key ==='ArrowUp'){
        mil_value++;
        if(mil_value>=999)
            mil_value = 999;
        document.getElementById("fourth").innerHTML = mil_value;
    }
    if(event4.key ==='ArrowDown'){
        mil_value--;
        if(mil_value<0)
            mil_value = 0;
        document.getElementById("fourth").innerHTML = mil_value;
    }
};