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


var genreSelect = ""

romanceButton.addEventListener("click", genreRomance);
fantasyButton.addEventListener("click", genreFantasy);
noirButton.addEventListener("click", genreNoir);

questionaire.setAttribute("style", "display:none");

function genreRomance () {
    genreSelect = "Romance";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is your character's most trusted confidante?")
    backQuest.innerHTML = ("Is their background grand or humble?")
    ageQuest.innerHTML = ("Of what age are they?")
    roleQuest.innerHTML = ("What is their role in this grand romance?")
    goalQuest.innerHTML = ("What goal does their heart most desire?")
    secretQuest.innerHTML = ("What shocking secret is held to their heart?")
    return genreSelect;
};

function genreFantasy () {
    var genreSelect = "Fantasy";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is their truest companion?")
    backQuest.innerHTML = ("From what origins do they hail?")
    ageQuest.innerHTML = ("How many winters have they seen?")
    roleQuest.innerHTML = ("What role do they play in this grand tale?")
    goalQuest.innerHTML = ("What motivates their every deed?")
    secretQuest.innerHTML = ("What dark secret do they keep close?")
    return genreSelect;
};

function genreNoir () {
    var genreSelect = "Noir";
    questionaire.setAttribute("style", "display: flex; justify-content: center; flex-direction: column");
    friendQuest.innerHTML = ("Who is the one person they trust in this rotten city?")
    backQuest.innerHTML = ("Where did they come from, only to end up here?")
    ageQuest.innerHTML = ("How old are they?")
    roleQuest.innerHTML = ("What part do they play?")
    goalQuest.innerHTML = ("What drives this character?")
    secretQuest.innerHTML = ("What secret will they take to the grave?")
    return genreSelect;
};

async function addNewCharacter(event) {
    event.preventDefault();

    const name = document.querySelector("name").value;
    const companion = document.querySelector("companion").value;
    const genre = genreSelect
    const background = document.querySelector("background").value;
    const age = document.querySelector("age").value;
    const story_role = document.querySelector("story_role").value;
    const goal = document.querySelector("goal").value;
    const secret = document.querySelector("secret").value;

    const response = await fetch('/api/createChar', {
        method: 'POST',
        body: JSON.stringify({
            name,
            companion,
            genre,
            background,
            age,
            story_role,
            goal,
            secret
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Character Submission Failed!');
    }
}

document.addEventListener('submit', newFormHandler);







