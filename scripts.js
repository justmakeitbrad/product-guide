//add code that changes product code w/ button input//
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_text //

currentFinish = "";

function sclSelector() {
    var x = document.getElementById("finalCode");
    x.innerHTML += ` SCL`
}


function finishSelector11P() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 11P";
        currentFinish = "11P";
    } else {
        x.innerHTML = "AR101 11P";
        currentFinish = "11P";
    }
}

function finishSelector15() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 15";
        currentFinish = "15";
    } else {
        x.innerHTML = "AR101 15";
        currentFinish = "15";
    }
}

function finishSelectorFBL() {
    var x = document.getElementById("finalCode");
    if (x.innerHTML === "AR101") {
        x.innerHTML = "AR101 FBL";
        currentFinish = "FBL";
    } else {
        x.innerHTML = "AR101 FBL";
        currentFinish = "FBL";
    }
}


/*   Trying to have photo change with code 
function imageSelector11P() {
    var x = document.getElementById("finalCode");
    var y = document.getElementById("productImage");
    if (x.innerHTML === "AR101 11P") {
        y.innerHTML = "https://www.surelochardware.com/wp-content/uploads/2017/05/arapaho-knob-11p.jpg";
    } else {
        y.innerHTML = "https://www.surelochardware.com/wp-content/uploads/2017/05/arapaho-knob-15.jpg";
    }
}
*/