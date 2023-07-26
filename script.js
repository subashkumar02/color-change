const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(#050A30), rgb(0, 247, 255)),url('')"
        document.getElementById("h1").innerHTML = "On the floor baby.."
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(238, 255, 0, 0.3), rgb(16, 204, 229)),url('')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Hit it hard baby..!"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0, 18, 0, 0.3), rgb(255, 255, 255)),url('')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Rock the party baby..!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(18, 0, 0, 0.3), rgb(249, 244, 248)18),url('')"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Pattoolengi podi"
    }, 600)
   
}

setInterval(changeText, 1000)
const bgAudio = document.getElementById("bgAudio");

       
