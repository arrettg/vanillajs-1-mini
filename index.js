console.log("Hello World")
let count = 0
const element = document.getElementById("counter")
function increase (){
     count +1;
     element.innerText = count ++;
}
function decrease (){
     count -1;
    element.innerText = count --;
}
function reset (){
     count =0;
     element.innerText = count
     element.innerTextHTML = "<mark>" + count + "</mark>";
}
function selectTheme(theme){
    document.getElementsByTagName ("body")[0].className = theme;
    document.getElementsByTagName ("main")[0].className = theme;
    var buttons = document.getElementsByTagName("button");
    for (let i = 0;i < buttons.length; i++){
        buttons[i].className = theme;
    }
}