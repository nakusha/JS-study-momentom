const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImageLoad(){
    console.log("finish Loading");
}
function paintImage(imageNumber){
    const image = new Image();
    image.src = `images/${imageNumber}.jpg`
    image.classList.add("bgImage");
    body.prepend(image)
    // If use api will need
    //image.addEventListener("loadend", handleImageLoad)
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();