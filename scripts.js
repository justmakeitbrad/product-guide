//add code that changes product code w/ button input//
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_text //

function sclSelector() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 SCL";
    } else {
        x.innerHTML = "AR101 SCL";
    }
}
/*
function kw1Selector() {
    var x = document.getElementById("finalCode");
    let finishSlice = str.slice(4)
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101";
    } else {
        x.innerHTML = "AR101" + ${finishSlice}; //splice ${} to keep finish
}
*/
function finishSelector11P() {
    var x = document.getElementById("finalCode");
    var search = x.search(SCL)
    if (search.innerHTML == true) {
        x.innerHTML = x + " 11P";
    } else {
        x.innerHTML = "AR101 11P";
    }
}

function finishSelector15() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 15";
    } else {
        x.innerHTML = "AR101 15";
    }
}

function finishSelectorFBL() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 FBL";
    } else {
        x.innerHTML = "AR101 FBL";
    }
}

