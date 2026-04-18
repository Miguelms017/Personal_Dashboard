import { deleteShort, newShort } from "./shortcuts.js";
import { deleteNote, newNote } from "./notes.js";
import { loadweather } from "./weather.js";
import { display } from "./setmenu.js";

// Retrieve the pervious set up username
let name = localStorage.getItem("userName");

// if not previous usernames
if (name === null){

    // get name
    name = window.prompt('Welcome to your New Personal Dashboard.\n\nPlease insert your Username.')

    // if no usernames selected
    if (name === null){

        // set default
        document.querySelector(".hero_Welcome").innerHTML = `Hello User`

    } else {

        // set up name
        localStorage.setItem("userName", name);

    }

}


// check for user Image
let image = localStorage.getItem("profileImg");

if (image){

    document.querySelector(".photo").innerHTML = `<img src="${image}" alt="profile" height="125" width="125" >`;
}

// display name
document.querySelector(".hero_Welcome").innerHTML = `Hello ${name}`

// display settings screen
document.querySelector(".settings").addEventListener("click", display);

// shows weather
loadweather();

// retrieves the localStorage elements on notes
document.querySelector(".content").innerHTML = localStorage.getItem("AllNotes");

// retrieves the localStorage elements on shortcuts
document.querySelector(".order").innerHTML = localStorage.getItem("AllShorts");

//management of shortcuts
document.getElementById("newShort").addEventListener('click', newShort);
document.querySelector(".deleteShort").addEventListener('click', deleteShort);

// management of notes
document.querySelector(".AddNote").addEventListener("click", newNote);
document.querySelector(".content").addEventListener("click", deleteNote);