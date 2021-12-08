let buttons= document.querySelectorAll(".sebet");
let count= document.querySelector(".all-item");
let productName=document.querySelector(".item-name");
let productPrice=document.querySelector(".item-price");
let countItem=document.querySelector(".item-count");

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
            productName.innerText="Product Id: "+product.id;
            countItem.innerText="Product Count: "+1;
            productPrice.innerText="Product Price: "+product.priceid;
        }
        else{
            basket[cardIndex].count += 1;
            // productName.innerText="Product Id: "+product.id;
            // countItem.innerText="Product Count: "+1;
            // productPrice.innerText="Product Price: "+product.priceid;
        }
    });
    
});

