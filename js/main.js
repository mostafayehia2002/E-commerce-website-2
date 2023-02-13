
//navbar in large screen
let list=document.querySelectorAll(".list li");
let border=document.querySelectorAll(".list li span");
list.forEach(function(e,i){  
    e.onclick=()=>{
        border.forEach((b,x) => {
            border[x].classList.remove("active");
        });
        border[i].classList.add("active");
    }
})

//navbar in mobile screen 
let menu=document.querySelector(".navbar .list");
let menuButton=document.querySelector(".mobile-list .menu");
menuButton.onclick=()=>{
    menu.classList.toggle("translate");
}
let closeMenu=document.getElementById("close");
closeMenu.onclick=()=>{
    menu.classList.toggle("translate");
}

