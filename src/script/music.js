export function music(){
    document.getElementById("play").addEventListener("click", function() {
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display= "flex";
});

document.getElementById("pause").addEventListener("click", function() {
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display= "block";
});
}