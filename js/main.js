
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

//fetch products from server
let products=document.querySelectorAll(".products");
fetch("productData/product.json").then(
    (request)=>{return request.json()}
).then(
    (data)=>{  
        for(let x=0;x<2;x++){      
        for(let i=0;i<4;i++){
            let random=Math.floor(Math.random()*data.length);  
            products[x].innerHTML+=
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
             <p class="product-price">${data[random].product_price}EG</p>
             <div class="product-buy">
               <i class="fa-solid fa-cart-shopping"></i>
             </div>
           </div>`;
            }

        }
    }
)
