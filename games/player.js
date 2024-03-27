var gameplayer = document.getElementById("y");
var button = document.getElementById("papa");

button.addEventListener('click',fullscreen)


function fullscreen()
{
    console.log("dddd");

    if (gameplayer.requestFullscreen)
        gameplayer.requestFullscreen();
    if (gameplayer.requestFullscreen())
        document.exitFullscreen();
}