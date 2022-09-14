//add code that changes product code w/ button input//
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_text //

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 SCL";
    } else {
        x.innerHTML = "AR101";
    }
}

function finishSelector11P() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 11P";
    } else {
        x.innerHTML = "AR101";
    }
}

function finishSelector15() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 15";
    } else {
        x.innerHTML = "AR101";
    }
}

function finishSelectorFBL() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 FBL";
    } else {
        x.innerHTML = "AR101";
    }
}

