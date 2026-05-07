function press_dice() {
    let randNum = Math.floor((Math.random() * 6) + 1);
    var dice = document.getElementById("dice");
    dice.innerHTML = randNum;
}

function press_lotto() {
    var lotto = document.getElementById("lotto");
    lottoNmbrs = []
    for (var i = 0; i < 7; i++) {
        let randNum = Math.floor((Math.random() * 40) + 1);
        lottoNmbrs.push(randNum)
        lotto.innerHTML = lottoNmbrs;
}
}