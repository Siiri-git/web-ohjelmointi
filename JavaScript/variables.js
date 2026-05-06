// Math section
  // buttons
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
function abs(x) {
    alert(Math.abs(x))
}
function sqrt(x) {
    alert(Math.sqrt(x))
}
function pow(x, y) {
    alert(Math.pow(x, y))
}
function max(x, y) {
    alert(Math.max(x, y))
}
function min(x, y) {
    alert(Math.min(x, y))
}
function round(x) {
    alert(Math.round(x))
}
function calc_round() {
    var num1 = Number(document.getElementById("nmbr1").value);   
    round(num1)
}
  // Functions
function calc_min() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);    
    min(num1, num2)
}
function calc_max() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);    
    max(num1, num2)
}
function calc_pow() {
    var num1 = Number(document.getElementById("nmbr1").value);
    var num2 = Number(document.getElementById("nmbr2").value);    
    pow(num1, num2)
}
function calc_sqrt() {
    var num1 = Number(document.getElementById("nmbr1").value);   
    sqrt(num1)
}
function calc_abs() {
    var num1 = Number(document.getElementById("nmbr1").value);   
    abs(num1)
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


// Datetime section
function dateTime() {
    // variables
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
    // variable inner html
    date.innerHTML = `Päivämäärä: ${nDate}`;
    time.innerHTML = `Päivämäärä: ${nTime}`;
    dateAndTime.innerHTML = `Päivämäärä & kellonaika: ${nDate} klo ${nTime}`;
    weekday.innerHTML = `Viikonpäivä: ${weekdayList[nWeekday]}`
    month.innerHTML = `Kuukausi: ${monthList[nMonth]}`

}

// Sets section
const veijoSect = document.getElementById("veijo");
var veijo = new Set(['luku', 'poisto']);
for (access of veijo) {
    var lista = document.createElement("ul");
    var veijoInfo = document.createElement("li");
    veijoInfo.innerHTML = access;
    lista.append(veijoInfo);
    veijoSect.append(lista);
};

const elviraSect = document.getElementById("elvira");
var elvira = new Set(['luku', 'kirjoitus', 'muokkaus']);
for (access of elvira) {
    var lista = document.createElement("ul");
    var elviraInfo = document.createElement("li");
    elviraInfo.innerHTML = access;
    lista.append(elviraInfo);
    elviraSect.append(lista);
};

const mehdiSect = document.getElementById("mehdi");
var mehdi = new Set(['luku', 'muokkaus', 'poisto']);
for (access of mehdi) {
    var lista = document.createElement("ul");
    var mehdiInfo = document.createElement("li");
    mehdiInfo.innerHTML = access;
    lista.append(mehdiInfo);
    mehdiSect.append(lista);
};

const tuuliSect = document.getElementById("tuuli");
var tuuli = new Set(['kirjoitus', 'poisto']);
for (access of tuuli) {
    var lista = document.createElement("ul");
    var tuuliInfo = document.createElement("li");
    tuuliInfo.innerHTML = access;
    lista.append(tuuliInfo);
    tuuliSect.append(lista);
};

const veTuSect = document.getElementById("veijotuuli");
var veTu = veijo.union(tuuli);
for (access of veTu) {
    var veTuInfo = document.createElement("li");
    veTuInfo.innerHTML = access;
    veTuSect.append(veTuInfo)
}

const meElSect = document.getElementById("mehdielvira");
var meEl = mehdi.intersection(elvira);
for (access of meEl) {
    var meElInfo = document.createElement("li");
    meElInfo.innerHTML = access;
    meElSect.append(meElInfo)
}

const elTuSect = document.getElementById("elviratuuli");
var elTu = elvira.symmetricDifference(tuuli);
for (access of elTu) {
    var elTuInfo = document.createElement("li");
    elTuInfo.innerHTML = access;
    elTuSect.append(elTuInfo)
}