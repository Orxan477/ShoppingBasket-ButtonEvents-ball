let buttons= document.querySelectorAll(".sebet");
let count= document.querySelector(".all-item");
let productName=document.querySelectorAll(".item-name");
let productPrice=document.querySelectorAll(".item-price");
let countItem=document.querySelectorAll(".item-price");
console.log(countItem);

let basket=[];

buttons.forEach(button => {
    button.addEventListener('click',(ev)=>{
        let cardId=ev.target.parentElement.parentElement.getAttribute("data-id");
        let priceId=ev.target.previousElementSibling.getAttribute("data-id");
        let cardIndex=basket.findIndex((card)=>card.id==cardId)
        

        if(cardIndex==-1){
            let product={
                id: cardId,
                count: 1,
                priceid: priceId,
            };
            basket.push(product);
            count.innerText=basket.length;
            productName.innerText="Product Id:"+product.id;
            countItem.innerText="Product Price:"+product.count;
            productPrice.innerText="Product Price:"+product.priceid;
        }
        else{
            basket[cardIndex].count += 1;
            
        }
    });
    
});

