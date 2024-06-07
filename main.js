

//valitaan kaikki elemnentit
const audiot = document.querySelectorAll("audio");
const buttons = document.querySelectorAll(".button");

//lisää tapahtumakuuntelijat
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const index = button.getAttribute("data-index");
        playSound(index);
    });
    
});


function playSound(index) {
    // Hae äänielementti indeksin perusteella
    const audio = audiot[index];
    const button = buttons[index];
    
    if (audio.paused) {
        audio.load();
        audio.play();
        button.classList.add("onplay");
    } else {
        audio.pause();
        button.classList.remove("onplay");
    }

    setTimeout(() => {
        button.classList.remove("onplay");
    }, 1500);
}
 