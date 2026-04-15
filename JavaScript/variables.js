// meth buttons
function plus(x, y) {
    alert(x + y);
}
function minus(x, y) {
    alert(x - y);
}
function multi(x, y) {
    alert(x * y);
}
function div(x, y) {
    alert(x / y);
}

function calc_sum() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);
    plus(num1, num2)
}
function calc_subst() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);
    minus(num1, num2)
}
function calc_times() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);
    multi(num1, num2)
}
function calc_div() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);
    div(num1, num2)
}

