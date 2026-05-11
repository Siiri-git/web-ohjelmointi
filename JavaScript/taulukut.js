var numbers = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var words = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

// 1 osio
function pickWord() {
    var inpNmbr = (Number(document.getElementById("pickNmbr").value) - 1);
    var word = words[inpNmbr];

    const wordSpot = document.getElementById("spotOne");
    wordSpot.innerHTML = word;
}

// 2 osio
function findIndex() {
    var inpWord = document.getElementById("findWord").value;
    var index = words.indexOf(inpWord);

    const wordSpot = document.getElementById("spotTwo");
    wordSpot.innerHTML = index;
}

// 3 osio
function cutTable() {
    const ulSpot = document.getElementById("spotThree");

    var startSpot = Number(document.getElementById("start").value);
    var cutOff = Number(document.getElementById("cut").value);

    const cutPoints = words.slice(startSpot, cutOff);

    ulSpot.innerHTML = "";
    cutPoints.forEach(wrd => {
        var newLi = document.createElement("li");
        newLi.innerHTML = wrd;
        ulSpot.append(newLi);
    });
}

// 4 osio
function printStuff(type) {
    const ulSpot = document.getElementById("spotFour");

    if (type === "text"){
        ulSpot.innerHTML = "";
        words.forEach(word => {
            var wordLi = document.createElement("li");
            wordLi.innerHTML = word;
            ulSpot.append(wordLi);
        });
    };
    if (type === "numbers"){
        ulSpot.innerHTML = "";
        numbers.forEach(number => {
            var numberLi = document.createElement("li");
            numberLi.innerHTML = number;
            ulSpot.append(numberLi);
        });
    };
}
function orderStuff(type) {
    if (type === "text"){
        words.sort();
    };
    if (type === "numbers"){
        numbers.sort(function(a, b){return a- b});
    };
}
function reverseStuff(type) {
    if (type === "text"){
        words.reverse();
    };
    if (type === "numbers"){
        numbers.reverse();
    };
}

// 5 osio
function printNumbers() {
    const listSpot = document.getElementById("spotFive");

    listSpot.innerHTML = ""
    numbers.forEach(number => {
        var numberLi = document.createElement("li");
        numberLi.innerHTML = number;
        listSpot.append(numberLi);
    });
}
function chooseNumbers(type) {
    var limit = Number(document.getElementById.apply("usrNmbr").value);
    if(type === "small"){
        
    };
    if(type === "big"){
        
    };
}