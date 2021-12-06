function count(){
    let count=0;
    return function(){
        count+=1 
        return count;
    }
}

let buttons=document.querySelectorAll(".btn");

priceButton.addEventListener("submit",function(ev){
    ev.preventDefault();
    let span=document.createElement("span");
    span.className="";
    span.innerText=inputNumber.value;
}
)

