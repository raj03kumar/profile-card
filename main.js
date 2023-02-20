// Get elements from the DOM
const profileImg=document.querySelector(".profile-card img");
const menuBtn=document.querySelector(".menu-btn");
const overlay=document.querySelector(".overlay");
const more=document.querySelector(".more");

// Add click event to menu button
menuBtn.addEventListener("click", ()=>{
    // Toggle all synamic javascript classes
    profileImg.classList.toggle("img-expand");
    menuBtn.firstElementChild.classList.toggle("fa-times");
    menuBtn.firstElementChild.classList.toggle("menu-btn-opened");
    overlay.classList.toggle("overlay-opened");
    more.classList.toggle("more-opened");
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};

