var i = 0;
var txt1 = "Hi, welcome";
var txt2 = " I am Jaime";
var txt3 = "and this is my portfolio";
var speed = 99;

let $elements = document.getElementsByClassName("writeText");
function typeWriter() {
    if ((i < txt1.length) | (i < txt2.length) | (i < txt3.length)) {
        $elements[0].innerHTML += txt1.charAt(i);
        $elements[1].innerHTML += txt2.charAt(i);
        $elements[2].innerHTML += txt3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
