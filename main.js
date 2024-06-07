const audiot = document.querySelectorAll("audio");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const index = button.getAttribute("data-index");
        playSound(index);
    });
    
});

function playSound(index) {
    const audio = audiot[index];
    const button = buttons[index];
    
    audio.load();
    audio.play();
    button.classList.add("onplay");
    
    setTimeout(() => {
        button.classList.remove("onplay");
    }, 1500);
}
 
