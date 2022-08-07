let hme = document.getElementById("home")
let count = 0

function plusone(){
    count += 1
    hme.textContent = count
}

function plustwo() {
    count += 2
    hme.textContent = count
}

function plusthree() {
    count+=3
    hme.textContent = count
}

let gst = document.getElementById("guest")
let count1 = 0
 
function gplusone(){
    count1 += 1
    gst.textContent = count1
}
 
function gplustwo() {
    count1 += 2
    gst.textContent = count1
}
 
function gplusthree() {
    count1 += 3
    gst.textContent = count1
}

function reset() {
    count = 0
    count1 = 0
    gst.textContent = count1
    hme.textContent = count
}