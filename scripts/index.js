//store the products array in localstorage as "products"
let data = JSON.parse(localStorage.getItem("products")) || []

function Products(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}



function storeproduct(e){
     event.preventDefault()
    let form = document.getElementById("products")
    let type = form.type.value
    let desc = form.desc.value
    let price = form.price.value
    let image = form.image.value
   // console.log(type,desc,price,image)

    let admin = new Products(type,desc,price,image)
    console.log(admin)

   
    data.push(admin)
    
    localStorage.setItem("products",JSON.stringify(data))
}

