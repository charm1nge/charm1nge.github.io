const item = document.querySelector("[data-user-template]");
var searchinput = document.getElementById("searchbar");

var apps = []
function createApp(name, icon, url) {
    const app = item.content.cloneNode(true).children[0];
    const image = document.createElement("img");
    const div = document.createElement("div");
    
    div.parent = app;
    image.id = name;
    image.parent = div;
    div.style.width = "50%";
    div.style.height = "auto";

    image.style.height = "auto";
    image.style.width = "130px"
    image.style.flexBasis = "140px";
    image.style.flexShrink = 1;
    image.style.flexGrow = 1;
    
    image.style.display = "block";
    apps.push(name);
    image.src = icon;
    image.parentElement = item
    image.onclick = function(){window.location.replace(url);};
    image.style.borderRadius = '15px';
    const parent = document.getElementById("app-container");
    parent.append(image);
}

document.addEventListener('contextmenu', event => event.preventDefault());

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

createApp('roblox','app-icons/roblox.webp','/games/roblox.html');
createApp('minecraft-java-edition', 'app-icons/minecraft-java-edition.webp', "/games/minecraft-java-edtion.html");
createApp('subway-surfers', 'app-icons/subway-surfers.webp', "/games/subway-surfers.html");
createApp('angry-bids-showdown','app-icons/angry-birds-showdown.png','/games/angry-birds-showdown.html');
createApp('cut-the-rope','app-icons/cut-the-rope.jpg','/games/cut-the-rope.html');
createApp('drift-the-boss','app-icons/drift-boss.png','/games/drift-boss.html')
createApp('crossy-road', 'app-icons/crossy-road.webp', "/games/crossy-road.html");
createApp('temple-run-2', 'app-icons/temple-run-2.webp', "/games/temple-run-2.html");
createApp('funny-shooter-2', 'app-icons/funny-shooter-2.jpeg', "/games/funny-shooter-2.html");
createApp('drive-mad', 'app-icons/drive-mad.jpg', "/games/drive-mad.html");
createApp('ping-pong-go', 'app-icons/ping-pong-go.jpg', "/games/ping-pong-go.html");
createApp('tunnel-rush-2', 'app-icons/tunnel-rush-2.jpg', "/games/tunnel-rush-2.html");
createApp('parkour-race', 'app-icons/parkour-race.jpg', "/games/parkour-race.html");
createApp('stick-merge', 'app-icons/stick-merge.jpg', "/games/stick-merge.html");
createApp('stickman-hook', 'app-icons/stickman-hook.webp', "/games/stickman-hook.html");
createApp('spiral-roll', 'app-icons/spiral-roll.webp','/games/spiral-roll.html');
createApp('krunker', 'app-icons/krunker.webp', "/games/krunker.html");
createApp('basketball-frvr','app-icons/basketball-frvr.webp','/games/basketball-frvr.html');
createApp('friday-night-funkin', 'app-icons/friday-night-funkin.webp', "/games/friday-night-funkin.html");
createApp('hexgl', 'app-icons/hexgl.webp', "/games/hexgl.html");
createApp('treasure-arena', 'app-icons/treasure-arena.webp', "/games/treasure-arena.html");
createApp('crosscode', 'app-icons/crosscode.webp', "/games/crosscode.html");
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
createApp('scooter-xtreme','app-icons/scooter-xtreme.jpg','/games/scooter-xtreme.html');
createApp('slope','app-icons/slope.png','/games/slope.html');
createApp('tomb-of-the-mask','app-icons/tomb.png','/games/tomb.html');
createApp('polytrack','app-icons/polytrack.png','/games/ptrack.html');
createApp('rooftop-snipers','app-icons/rooftop-snipers.png','/games/rooftopsnipers.html');
createApp('getaway-shootout','app-icons/getaway-shootout.png','/games/gts.html');
createApp('madalin-stunt','app-icons/madalin-stunt-cars-3-logo.webp','/games/madalinstunt.html');
createApp('sling-drift','app-icons/sling-drift-logo.webp','/games/slingd.html');
createApp('drift-hunters','app-icons/drift-hunters.jpg','/games/drifth.html');
createApp('granny','app-icons/granny-granny.jpg','/games/gran.html');

function search(text)
{
    if (!text == "")
    {
        for (let i = 0; i < apps.length; i++) {
            var appname = apps[i];
            var appnametwo = appname.replaceAll("-"," ")
            var theapp = document.getElementById(appname);

            if (appnametwo.toString().includes(text))
            {
                theapp.style.display = "";
            }
            else
            {
                theapp.style.display = "none";
            }
        }
    }
    else
    {
        for (let i = 0; i < apps.length; i++) {
            var appname = apps[i];
            var appnametwo = appname.replaceAll("-"," ")
            var theapp = document.getElementById(appname);
            theapp.style.display = "";
        }
    }
}
