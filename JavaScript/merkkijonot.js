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
function slice_string() {
    
}