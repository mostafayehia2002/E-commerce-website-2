

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