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

function dateTime() {
    const newDate = new Date();

    const weekdayList = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Tostai", "Perjantai", "Lauantai"];
    const monthList = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];

    const nDate = newDate.toLocaleDateString();
    const nTime = newDate.toLocaleTimeString();
    const nWeekday = newDate.getDay();
    const nMonth = newDate.getMonth();

    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var dateAndTime = document.getElementById("dateAndTime");
    var weekday = document.getElementById("weekday");
    var month = document.getElementById("month");

    date.innerHTML = `Päivämäärä: ${nDate}`;
    time.innerHTML = `Päivämäärä: ${nTime}`;
    dateAndTime.innerHTML = `Päivämäärä & kellonaika: ${nDate} klo ${nTime}`;
    weekday.innerHTML = `Viikonpäivä: ${weekdayList[nWeekday]}`
    month.innerHTML = `Kuukausi: ${monthList[nMonth]}`

}