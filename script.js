const Click = () => {
    carousel = document.getElementById("carousel").style
    card = document.getElementById("card").style
    text = document.getElementById("text1").style
    info = document.getElementById("info").style
    
    carousel.width = "685px"
    carousel.transition = "0.3s"

    card.height = "695px"
    card.transition = "0.5s"

    text.display = "block"
    text.transition = "opacity 1s"
    text.transitionDelay = "1s"

    info.height = "348px"
}