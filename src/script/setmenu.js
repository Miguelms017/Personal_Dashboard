/*
setmenu.js

this displays the settings menu and changes localStorage attributes
*/

// display menu and listeners for buttons
export function display(){
    document.getElementById("settings_menu").style.display = "block";

    // listener to change username
    document.getElementById("changeUser").addEventListener("click", changeUsername);

    // listener to change image
    document.getElementById("setImage").addEventListener("click", changePhoto);

    // listener to close menu
    document.getElementById("leave").addEventListener("click", leave);
}

// change username trigger
function changeUsername(){
    // Retrieving the new username
    const newUser = document.querySelector(".newUser").value;

    if (newUser === null || newUser === ""){
        // displays an error
        window.alert("Pleaser insert an username");
    } else {
        // new username setup
        localStorage.setItem("userName", newUser);

        location.reload();
    }
}

function changePhoto(){
    // retrieving new photo
    const newPhoto = document.querySelector(".newimage").files[0];

    if(!newPhoto){
        // display an error
        window.alert("No Image Selected")
    } else {

        // reader
        const reader = new FileReader();

        reader.onload = function (event){

            const imgString = event.target.result;
            
            // save to localStorage
            localStorage.setItem('profileImg', imgString);  

            // reload page 
            location.reload();
        };

        reader.readAsDataURL(newPhoto);
        
    }
}

// close menu
function leave(){
    document.getElementById("settings_menu").style.display = "none";
}