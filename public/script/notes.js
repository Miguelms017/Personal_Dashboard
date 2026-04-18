/*
notes.js

create and manage notes
*/

export function newNote(event){
    
    // avoid reload
    event.preventDefault();

    // getting list
    let list = document.querySelector(".content").innerHTML;

    // adding notes
    var note = window.prompt("Please insert your note here");

    // avoid creating null or blank notes
    if (note !== null && note !== ""){
        
        // creating the note
        list = list + `
        <p class="listItem"><button class="deleteNote"></button>${note}</p>`;

        // display back
        document.querySelector(".content").innerHTML = list;

        // stores into the localStorage
        localStorage.setItem("AllNotes", list)

    }
}

export function deleteNote(event){

    // avoid defaults
    event.preventDefault();

    // targeted to the parent element
    const target = event.target;

    // erase the parent element
    if(target.classList.contains("deleteNote")){
        target.parentElement.remove();
    }

    // updates the localStorage
    let list = document.querySelector(".content").innerHTML;
    localStorage.setItem("AllNotes", list);
}