const btnOptions = document.querySelector(".btn_options");
const optionsDiv = document.querySelector(".options");
const bgImage = document.querySelector("background");


// document.getElementsByName("spring")
// document.getElementsByName("toskania")
// document.getElementsByName("plaza")
// podmianka tła na img/name

// document.getElementsByName("birds")
// document.getElementsByName("sea")
// document.getElementsByName("wind")
// new Audio = audio.play(name) - pod name nazwa pliku mp3 z audio


btnOptions.addEventListener("click", function(){
    optionsDiv.classList.toggle("show")
});

document.addEventListener("click", function(){
    console.log(this.name)
})