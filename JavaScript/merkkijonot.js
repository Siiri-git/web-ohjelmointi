// Poimi kirjain
function letter_place(x, y) {
    var letrSpot = document.getElementById("letrSpot");
    let letter = x.at(y);
    letrSpot.innerHTML = letter;
}
function get_letter() {
    var word = document.getElementById("word").value;
    var spot = (Number(document.getElementById("nmbr").value)) - 1;
    letter_place(word, spot);
}

// Löydä indeksi
function index_position(x, y) {
    var indexSpot = document.getElementById("indexSpot");
    let index = x.indexOf(y);
    indexSpot.innerHTML = index + 1;
}
function get_index() {
    var text = document.getElementById("text").value;
    var letters = document.getElementById("letters").value;
    index_position(text, letters);
}

// Leikkaa merkkijono
function slice_position(x, y, z) {
    var cutString = document.getElementById("cutString");
    let sliced = x.slice(y, z);
    cutString.innerHTML = sliced;
}
function get_slice() {
    var string = document.getElementById("string").value;
    var posOne = Number(document.getElementById("posOne").value);
    var posTwo = Number(document.getElementById("posTwo").value);
    slice_position(string, posOne, posTwo);
}

// Replacement
function replace_spot(x, y, z) {
    var replacementSpot = document.getElementById("replacementSpot");
    let replace = x.replaceAll(y, z);
    replacementSpot.innerHTML = replace;
}
function get_replacement() {
    var givenTxt = document.getElementById("givenTxt").value;
    var replace = document.getElementById("replace").value;
    var replacement = document.getElementById("replacement").value;
    replace_spot(givenTxt, replace, replacement);
}


function split_position() {
    const listSpot = document.getElementById("listSpot");

    const splitTxt = document.getElementById("splitTxt").value;
    const splitSpot = document.getElementById("splitSpot").value;

    const txtSplit = splitTxt.split(splitSpot);

    listSpot.innerHTML = "";
    txtSplit.forEach(element => {
        var newLi = document.createElement("li");
        newLi.innerHTML = element;
        listSpot.append(newLi);
    });
}