/* 
shortcuts.js

This creates and manages new shortcuts
*/

export function newShort(event){

    // do not reload
    event.preventDefault()

    // getting from current list
    let list = document.querySelector(".order").innerHTML;

    // retrieving link
    var title = window.prompt('Title of the page');

    // avoid creating blank shortcuts    
    if (title !== null && title !== ""){

        var link = window.prompt("Paste the link here");

        // avoid creating broken shortcuts
        if(link !== null && link !== ""){

            // adding the new shortcut
            list = list + `
            <div class="link">
            <a href="http://${link}">
            <img class="icons" width="100px" height="100px" src="">
            <p>${title}</P>
            </a>
            <button class="eraseShort">X</button>
            </div>`

            // display back
            document.querySelector(".order").innerHTML = list

            // stores into the localStorage
            localStorage.setItem("AllShorts", list);
        }
    }
 }


 export function deleteShort(event){

    event.preventDefault();

    document.querySelectorAll(".eraseShort").forEach(f => {
         const currentDisplay = getComputedStyle(f).display;
        f.style.display = currentDisplay === "none" ? "block" : "none";
    });

    document.querySelectorAll(".eraseShort").forEach(btn => {
        btn.addEventListener('click', eraseShort)
    })
 }

 export function eraseShort(event){
    event.preventDefault();

    console.log("button pressed");
    const target = event.target;
    if(target.classList.contains("eraseShort")){
        target.parentElement.remove();
    }

    document.querySelectorAll(".eraseShort").forEach(f => {
        f.style.display = "none";
    });

    let list = document.querySelector(".order").innerHTML;
    localStorage.setItem("AllShorts", list);
 }