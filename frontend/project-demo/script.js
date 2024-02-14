
let products = [
    {name:"Samsung m51",price:2000},
    {name:"Iphone 12",price:12000},
    {name:"Samsung m51",price:2000},
    {name:"Iphone 12",price:12000}
]




function createProduct(product)
{
  
    let div = document.createElement("div")
    div.classList.add("one")
    

    let h1 = document.createElement("h1");
    h1.innerText=product.name;

    let p1 = document.createElement("p");
    p1.innerText=product.price;
    
   
    div.appendChild(h1);
    div.appendChild(p1);
    

    document.getElementById("products").appendChild(div);

   

}

products.forEach((prod)=>{
    createProduct(prod);
})




// document.getElementById("btn").addEventListener("click",doSomething)