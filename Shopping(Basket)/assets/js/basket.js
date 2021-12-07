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

let swet=document.querySelector(".sebet");
swet.onclick=function(ev){
    ev.preventDefault();
    swet.addEventListener("click",()=>{
        click=1
        document.querySelector("span").innerHTML=click
    })
}

