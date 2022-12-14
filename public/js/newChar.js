// const session = require("express-session");

// Pulled elements from newChar.handlebars
const questionaire = document.getElementById("questionaire");
const romanceButton = document.getElementById("romanceButton");
const fantasyButton = document.getElementById("fantasyButton");
const noirButton = document.getElementById("noirButton");
// Following variables pulled so the text can be adjusted based on selected genre.
const friendQuest = document.getElementById("friendQuest");
const backQuest = document.getElementById("backQuest");
const ageQuest = document.getElementById("ageQuest");
const roleQuest = document.getElementById("roleQuest");
const goalQuest = document.getElementById("goalQuest");
const secretQuest = document.getElementById("secretQuest");
const submitButton = document.getElementById("submitButton")


var genreSelect = ""

romanceButton.addEventListener("click", genreRomance);
fantasyButton.addEventListener("click", genreFantasy);
noirButton.addEventListener("click", genreNoir);

questionaire.setAttribute("style", "display:none");
// This function sets the questions to fit a Romance character.
function genreRomance () {
    genreSelect = "Romance";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is your character's most trusted confidante?")
    backQuest.innerHTML = ("What is the background of this striking persona?")
    ageQuest.innerHTML = ("Of how many years is their age?")
    roleQuest.innerHTML = ("What is their role in this grand romance?")
    goalQuest.innerHTML = ("What goal does their heart most desperately seek?")
    secretQuest.innerHTML = ("What shocking secret is held to their heart?")
    return genreSelect;
};
// This function sets the questions to fit a Fantasy character.
function genreFantasy () {
    genreSelect = "Fantasy";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is their truest companion?")
    backQuest.innerHTML = ("From what origins do they hail?")
    ageQuest.innerHTML = ("How many winters have they seen?")
    roleQuest.innerHTML = ("What role do they play in this grand tale?")
    goalQuest.innerHTML = ("What quest do they seek?")
    secretQuest.innerHTML = ("What dark secret do they keep close?")
    return genreSelect;
};
// This function sets the questions to fit a Noir character.
function genreNoir () {
    genreSelect = "Noir";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is the one person they trust in this rotten city?")
    backQuest.innerHTML = ("Where did they come from, only to end up here?")
    ageQuest.innerHTML = ("How old are they in years?")
    roleQuest.innerHTML = ("What part do they play?")
    goalQuest.innerHTML = ("What are they looking for?")
    secretQuest.innerHTML = ("What secret will they take to the grave?")
    return genreSelect;
};
// This is the function that takes in the values provided by the user and posts them to the route.
async function addNewCharacter(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const companion = document.querySelector("#companion").value;
    const genre = genreSelect
    const background = document.querySelector("#background").value;
    const age = document.querySelector("#age").value;
    const story_role = document.querySelector("#story_role").value;
    const goal = document.querySelector("#goal").value;
    const secret = document.querySelector("#secret").value;
    
    
    const response = await fetch('/api/createChar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            genre: genre,
            characters_name: name,
            companion: companion, 
            background: background,
            age: age,
            story_role: story_role,
            goal: goal,
            secret: secret,
        }),
    });
    if (response.ok) {
        document.location.replace('/user-characters');
    } else {
        alert('Character Submission Failed!');
    }
};
document.querySelector('#questionaire');
submitButton.addEventListener('click', addNewCharacter);