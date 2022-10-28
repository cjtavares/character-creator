const questionaire = document.getElementById("questionaire");
const romanceButton = document.getElementById("romanceButton");
const fantasyButton = document.getElementById("fantasyButton");
const noirButton = document.getElementById("noirButton");
var genreSelect = ""

romanceButton.addEventListener("click", genreRomance);
fantasyButton.addEventListener("click", genreFantasy);
noirButton.addEventListener("click", genreNoir);

function genreRomance () {
    var genreSelect = "Romance"
    console.log(genreSelect);
    return genreSelect;
};

function genreFantasy () {
    var genreSelect = "Fantasy"
    console.log(genreSelect);
    return genreSelect;
};

function genreNoir () {
    var genreSelect = "Noir"
    console.log(genreSelect);
    return genreSelect;
};







