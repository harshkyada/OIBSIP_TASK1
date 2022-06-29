function allclear(){
    var disp = document.getElementById("textview");
    disp.value = "";
}

function backspace(){
    var disp = document.getElementById("textview");
    disp.value = disp.value.substring(0,disp.value.length-1);
}

function insert(x){
    var disp = document.getElementById("textview");
    disp.value = disp.value + x;
}

function equal(){
    var disp = document.getElementById("textview");
    disp.value = eval(disp.value);
}
