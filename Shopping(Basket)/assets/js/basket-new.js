let buttons= document.querySelectorAll(".sebet");
let count= document.querySelector(".all-item");
let name= document.querySelector(".item-name");

localStorageCheck("count",0);

[...buttons].forEach((button) => {
    button.addEventListener('click',function(){

        localStorageCheck("basket",JSON.stringify([]));

        let basket= JSON.parse(localStorage.getItem("basket"));
            productNode=this.parentElement.parentElement;
        let order=productDataInfo(productNode);
        let isExist=basket.find((product)=>product.productId==order.productId);
        
        if (isExist==undefined) {
            order.count=1;
            basket.push(order);
        }else{
            isExist.count+=1;
        }
        localStorage.setItem("basket",JSON.stringify(basket));
        
        basketLength();
        basketOrders();
    });
})

// function basketOrders(){
//     // let basketOrder=[];
//     let basketOrder=[JSON.parse(localStorage.getItem("basket"))];
//     console.log(basketOrder);
// }

function localStorageCheck(name,number){
    if (!localStorage.getItem(`${name}`)) {
        localStorage.setItem(`${name}`,`${number}`);
        count.innerText=localStorage.getItem(`${name}`);
    }
    else{
        count.innerText=localStorage.getItem(`${name}`);
    }
}

function basketLength(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    let str=(count.innerText=basket.length);
    localStorage.setItem("count",str);
}

function productDataInfo(productNode){
    return{
        productId:productNode.getAttribute("data-id"),
        productName:productNode.querySelector(".card-title").innerText,
        productPrice:productNode.querySelector(".price-product").innerText,
        productImage:productNode.querySelector("img").src
    } 
}