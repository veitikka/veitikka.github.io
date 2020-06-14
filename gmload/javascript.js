function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    document.getElementById("servname").innerHTML = servername
    document.getElementById("mapname").innerHTML = mapname
    document.getElementById("gamemode").innerHTML = gamemode

    launchDoland()
}

function launchDoland() {
    var element = document.getElementById("doland")
    var posX = 0
    var posY = window.innerHeight / 3
    var anim = setInterval(move, 120)

    function move() {
        if (posX > window.innerWidth) {
            posX = -256
            posY = window.innerHeight / 3
        }
        posX += 1
        posY += 0.15

        element.style.right = `${posX}px`
        element.style.bottom  = `${posY}px`
    }
}