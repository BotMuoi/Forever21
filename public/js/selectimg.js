console.log("bug");
function selectimg(){
    var x = document.getElementsByName("chonanhsp");
    var y= document.getElementById("slide-one");
    for(var i=0;i<x.length;i++){
        if(x[i].checked==true){
            y.style.margin="0 0 0"+(-20*i)+"%";
            setBackground(i);
        }else{
            removeBackground(i);
        }
    }
}
function setBackground(index){
    var a =document.getElementsByClassName("navigation-auto");
    var u = document.getElementsByClassName("auto-btn");
    u[index].style.background = "#40d3dc";
}
function removeBackground(index){
    var a =document.getElementsByClassName("navigation-auto");
    var u = document.getElementsByClassName("auto-btn");
    u[index].style.background = "none";
}
function slider_dots(){
    var selecter = document.getElementsByName("img-selecter-dots");
    var dots = document.getElementsByClassName("auto-btn");
    var y= document.getElementById("slide-one");
    for(var i = 0;i<selecter.length;i++){
        if(selecter[i].checked == true){
            y.style.margin="0 0 0"+(-20*i)+"%";
            setBackground(i);
        }else{
            removeBackground(i);
        }
    }
}
var index = 0;
function slider_btn(obj){
    var data = obj.getAttribute("data-type");
    var y= document.getElementById("slide-one");
    removeBackground(index);
    if(data == "back"){
        index--;
        console.log(index);
        if(index < 0) index = 3;
        y.style.margin="0 0 0"+(-20*index)+"%";
        setBackground(index);
        console.log("back");
    }else{
        index++;
        console.log(index);
        if(index > 3) index = 0;
        y.style.margin="0 0 0"+(-20*index)+"%";
        setBackground(index);
        console.log("next");
    }
}