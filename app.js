// GET ALL ELEMENTS WITH ELEMENT SELECTOR
const car = document.getElementById("car");
const leftButton= document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const lightButton = document.getElementById("light-btn");
const headLight = document.getElementById("headLight")
// LOGIC FOR CAR MOVE LEFT

let distance = 0;
leftButton.addEventListener("click", ()=> {
    distance = -200;
    car.style.transform = `translateX(${distance}px)`;});
rightButton.addEventListener("click", ()=> {
    distance = 200;
    car.style.transform = `translateX(${distance}px)`;});



// LOGIC FOR CAR MOVE RIGHT


// LOGIC FOR HEADLIGHT TOGGLING
let isLightOn= false;
lightButton.addEventListener("click", ()=>
{
    if(isLightOn){
        headLight.style.display = "none";
        isLightOn = false;
    }
    else {
        headLight.style.display = "block";
        isLightOn = true;
    }
}  )