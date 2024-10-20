var gameplayer = document.getElementById("y");
var button = document.getElementById("papa");

window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
    }
});


button.addEventListener('click',fullscreen);


function fullscreen()
{
    console.log("dddd");

    if (gameplayer.requestFullscreen)
        gameplayer.requestFullscreen();
    if (gameplayer.requestFullscreen())
        document.exitFullscreen();
}
