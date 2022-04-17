var x = document.querySelector(".container");
var con = document.getElementById("con")
var dt = document.querySelector(".date");
var btn = document.getElementById("add");

var ch;
var textnode;
var a = 0;

var d = new Date();
dt.innerHTML = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

const pic = d.getMonth();
document.getElementById("con").style.backgroundImage = `url(/pics/${pic}.jpg)`;

btn.addEventListener("click", function(){
    
    ch = document.createElement("input");
    ch.setAttribute("type", "checkbox");
    ch.setAttribute("id",`check${a++}`);

    var li1 = document.createElement("li");

    var text = document.getElementById("inp");
    textnode = document.createTextNode(text.value);
    
    li1.appendChild(ch);
    li1.appendChild(textnode);
    
    document.getElementById("myList").appendChild(li1);

});

setInterval(function(){
    var zozo = document.getElementById("myList");
    var i = 0;
    while(zozo.hasChildNodes()) {
        if(document.getElementById(`check${i}`).checked)
            document.getElementById("myList").childNodes[i].style.display = "none";
        i++;
    }
}, 800);
