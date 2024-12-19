let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

let ct = new Date();
let h1 = currentTime.getHours();
let m1 = currentTime.getMinutes();

let angle1 = -90;
let angle2 = -90 + 6*(m1);
let angle3 = -90 + 30*(h1) + (1/2)*(m1);

function rotateLines() {
    angle1 += 6;
    angle2 += 1/10;
    angle3 += 1/120;

    document.getElementById("line1").style.transform = `rotate(${angle1}deg)`;
    document.getElementById("line2").style.transform = `rotate(${angle2}deg)`;
    document.getElementById("line3").style.transform = `rotate(${angle3}deg)`;
}

setInterval(rotateLines, 1000);
