const item = document.querySelector("[data-user-template]");
var searchinput = document.getElementById("searchbar");
var apps = []


function createApp(name, icon, url) {
    const app = item.content.cloneNode(true).children[0];
    const image = document.createElement("img");

    image.parent = app;
    apps.push(app);
    image.src = icon;
    image.parentElement = item
    image.onclick = function(){window.location.replace(url);};
    image.width = 150;
    image.height = 150;
    image.style.borderRadius = '15px';
    const parent = document.getElementById("app-container");
    parent.append(image);
}


createApp('minecraft-java-edition', 'app-icons/minecraft-java-edition.webp', "/games/minecraft-java.html");
createApp('subway-surfers', 'app-icons/subway-surfers.webp', "/games/subway-surfers.html");
createApp('crossy-road', 'app-icons/crossy-road.webp', "/games/crossy-road.html");
createApp('temple-run-2', 'app-icons/temple-run-2.webp', "/games/temple-run-2.html");
createApp('stickman-hook', 'app-icons/stickman-hook.webp', "/games/stickman-hook.html");
createApp('spiral-roll', 'app-icons/spiral-roll.webp','/games/spiral-roll.html')
createApp('krunker', 'app-icons/krunker.webp', "/games/krunker.html");
createApp('friday-night-funkin', 'app-icons/friday-night-funkin.webp', "/games/friday-night-funkin.html");
createApp('hexgl', 'app-icons/hexgl.webp', "/games/hexgl.html");
createApp('hexgl', 'app-icons/treasure-arena.webp', "/games/treasure-arena.html");
createApp('hexgl', 'app-icons/crosscode.webp', "/games/crosscode.html");
createApp('kour', 'app-icons/kour.webp', "/games/kour.html");
createApp('bitlife', 'app-icons/bitlife.webp', "/games/bitlife.html");
createApp('candy-clicker-2', 'app-icons/candy-clicker-2.webp', "/games/candy-clicker-2.html");
createApp('snowball-io', 'app-icons/snowball-io.webp', "/games/snowball-io.html");
createApp('baldi-basics', 'app-icons/baldi-basics.webp', "/games/baldi-basics.html");
createApp('paper-io', 'app-icons/paper-io-4.webp', "/games/paper-io.html");
createApp('smash-karts', 'app-icons/smash-karts.webp', "/games/smash-karts.html");
createApp('time-shooter-2', 'app-icons/time-shooter-2.webp', "/games/time-shooter-2.html");
createApp('kirka', 'app-icons/kirka.webp', "/games/kirka.html");
createApp('tall-io', 'app-icons/tall-io.webp', "/games/tall-io.html");
createApp('1v1-lol', 'app-icons/1v1lol.webp', "/games/1v1lol.html");
createApp('sausage-flip', 'app-icons/sausage-flip.webp', "/games/sausage-flip.html");
createApp('trains-io', 'app-icons/trains-io.webp', "/games/trains-io.html");
createApp('Five-Nights-At-Freddys-1', 'app-icons/fnaf1.jpg', "/games/fnaf1.html");
createApp('basketball-random','app-icons/basketball-random.webp','/games/basketball-random.html')

