// function count(){
//     let count=0;
//     return function(){
//         count+=1 
//         return count;
//     }
// }
var click=0;
let buttons=document.querySelectorAll(".btn");

// buttons.forEach(btn =>{
//     btn.addEventListener('click',()=>{
//         click+=1
//         document.querySelector("span").innerHTML=click
//     })
// });

// let swet=document.querySelector(".sebet");

// swet.onclick=function(ev){
//     ev.preventDefault();
//     swet.addEventListener('click',()=>{
        
//         
//        result.push(click);
//         document.querySelector(".all-item").innerHTML=result.length;
//     })
// }
var swetshirt=[];
let min=document.querySelector(".distanceMinSw");
let btn= document.querySelector(".sebet");
min.onclick=function(ev){
    click+=1;
    ev.preventDefault();
    min.addEventListener(`click`,()=>{
        btn.classList.add("d-none");
        btn.nextElementSibling.classList.remove("d-none");
        swetshirt.push(click);
        document.querySelector(".swet-item").innerHTML=swetshirt.length;
    })
}
let max=document.querySelector(".distanceMaxSw");
max.onclick=function(ev){
    click-=1;
    ev.preventDefault();
    max.addEventListener(`click`,()=>{
        swetshirt.pop(click);
        document.querySelector(".swet-item").innerHTML=swetshirt.length;
    })
}

var headphone=[];
let min=document.querySelector(".distanceMinHead");
let btn= document.querySelector(".sebet");
min.onclick=function(ev){
    click+=1;
    ev.preventDefault();
    min.addEventListener(`click`,()=>{
        btn.classList.add("d-none");
        btn.nextElementSibling.classList.remove("d-none");
        headphone.push(click);
        document.querySelector(".head-item").innerHTML=headphone.length;
    })
}
let max=document.querySelector(".distanceMaxHead");
max.onclick=function(ev){
    click-=1;
    ev.preventDefault();
    max.addEventListener(`click`,()=>{
        headphone.pop(click);
        document.querySelector(".head-item").innerHTML=headphone.length;
    })
}

var bag=[];
let min=document.querySelector(".distanceMinBag");
let btn= document.querySelector(".sebet");
min.onclick=function(ev){
    click+=1;
    ev.preventDefault();
    min.addEventListener(`click`,()=>{
        btn.classList.add("d-none");
        btn.nextElementSibling.classList.remove("d-none");
        bag.push(click);
        document.querySelector(".bag-item").innerHTML=headphone.length;
    })
}
let max=document.querySelector(".distanceMaxBag");
max.onclick=function(ev){
    click-=1;
    ev.preventDefault();
    max.addEventListener(`click`,()=>{
        bag.pop(click);
        document.querySelector(".bag-item").innerHTML=bag.length;
    })
}
var braclet=[];
let min=document.querySelector(".distanceMinBrac");
let btn= document.querySelector(".sebet");
min.onclick=function(ev){
    click+=1;
    ev.preventDefault();
    min.addEventListener(`click`,()=>{
        btn.classList.add("d-none");
        btn.nextElementSibling.classList.remove("d-none");
        braclet.push(click);
        document.querySelector(".brac-item").innerHTML=braclet.length;
    })
}
let max=document.querySelector(".distanceMaxBrac");
max.onclick=function(ev){
    click-=1;
    ev.preventDefault();
    max.addEventListener(`click`,()=>{
        braclet.pop(click);
        document.querySelector(".brac-item").innerHTML=braclet.length;
    })
}
document.querySelector(".all-item"),innerHTML=(swetshirt.length)+(headphone.length)+(bag.length)+(braclet.length);