var on = document.getElementById("start_button");
var off = document.getElementById("reset_button");

on.addEventListener("click", begin);
off.addEventListener("click", resetEverything)

var start_count=0;
var start_variable;

function begin(){
    hr.style.backgroundColor = "white"; hour_count = 1;document.removeEventListener("keyup", f1);
    min.style.backgroundColor = "white"; min_count = 1;document.removeEventListener("keyup", f2);
    sec.style.backgroundColor = "white"; sec_count = 1;document.removeEventListener("keyup", f3);
    milsec.style.backgroundColor = "white"; mil_count = 1;document.removeEventListener("keyup", f4);
    if(start_count%2==0){
        document.getElementById("start_button").value = "Pause";
        start();
    }else{
        document.getElementById("start_button").value = "Resume";
        clearInterval(start_variable);
    }
    start_count++;
}

function start(){
    start_variable = setInterval(function(){

        if(hr_value>0 && min_value==0 && sec_value==0 && mil_value==0){
            hr_value--; min_value = 59; sec_value = 59; mil_value = 99;  
        }
        
        document.getElementById("first").innerHTML = hr_value;

        if(min_value>0 && sec_value==0 && mil_value==0){
            min_value--; sec_value = 59; mil_value = 99;  
        }
        
        document.getElementById("secnd").innerHTML = min_value;

        if(sec_value>0 && mil_value==0){
            sec_value--;  mil_value = 99;  
        }
        
        document.getElementById("third").innerHTML = sec_value;

        if(mil_value>0){
            mil_value--;  
        }
        
        document.getElementById("fourth").innerHTML = mil_value;

    }, 10);
    
}

function resetEverything(){
    
    clearInterval(start_variable);  
    hr_value = 0; hour_count = 1; document.getElementById("first").innerHTML = hr_value;
    min_value  = 0; min_count = 1; document.getElementById("secnd").innerHTML = min_value;
    sec_value = 0; sec_count = 1; document.getElementById("third").innerHTML = sec_value;
    mil_value = 0; mil_count = 1; document.getElementById("fourth").innerHTML = mil_value;
    
    document.getElementById("start_button").value = "Start";
    if(start_count%2==1){
        start_count++;
    }
          
    
}
