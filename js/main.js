
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

//fetch oroduct from server
let products=document.querySelector(".products");

fetch("productData/product.json").then(
    (request)=>{return request.json()}
).then(
    (data)=>{        
        for(let i=0;i<4;i++){
            let random=Math.floor(Math.random()*data.length);
            products.innerHTML+=
            `<div class="card">  
            <img src="${data[random].product_img}" alt="" class="product-img"> 
             <span class="product-brand">${data[random].product_brand}</span>
             <h3 class="product-name">${data[random].product_name}</h3>
             <div class="product-stars">
               <i class="fa-solid fa-splotch"></i>
               <i class="fa-solid fa-splotch"></i>
               <i class="fa-solid fa-splotch"></i>
               <i class="fa-solid fa-splotch"></i>
               <i class="fa-solid fa-splotch"></i>
             </div>
             <p class="product-price">${data[random].product_price}</p>
             <div class="product-buy">
               <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
             </div>
           </div>`;
           

        }
    }
)
