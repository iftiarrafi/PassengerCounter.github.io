var count = document.getElementById("hishab");
var saved = document.getElementById("saved");
count = 0;
function increament() {
    console.log("button is clicked!");
    count = count + 1;
    hishab.innerText = count;
}

function decreament() {
    console.log("button is clicked!");
    count = count - 1;
    hishab.innerText = count;
}

function reset() {
    console.log("button is clicked!");
    count = 0;
    hishab.innerText = count;
}

function save() {
    console.log(count);
    saved.innerText = saved.innerText + " , " + count;
}

//or
// var count = 0;


// function increament() {
//     console.log("button is clicked!");
//     count = count + 1;
//     document.getElementById("hishab").innerText = count;
// }

// function decreament() {
//     console.log("button is clicked!");
//     count = count - 1;
//     document.getElementById("hishab").innerText = count;

// }

// function reset() {
//     console.log("button is clicked!");
//     count = 0;
//     document.getElementById("hishab").innerText = count;
// }