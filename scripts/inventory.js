let mydata = JSON.parse(localStorage.getItem("products")) || []
//console.log(mydata)

mydata.map(function(ele,index){
    
    let container = document.getElementById("all_products")

    let box = document.createElement("div")
    box.setAttribute("id","box")

    let image = document.createElement("img")
    image.src = ele.image
    image.setAttribute("id","img")

    let type = document.createElement("h4")
    type.innerText = `Product Type: ${ele.type}`

    let desc = document.createElement("h4")
    desc.innerText =`Product Name: ${ele.desc}`

    let price = document.createElement("h4")
    price.innerText = `Price: ${ele.price}`

    let btn = document.createElement("button")
    btn.setAttribute("id","remove_product")
    btn.innerText = "Remove Product"
    btn.addEventListener("click",function(){
        remove(index)
    })

    box.append(image,type,desc,price,btn)
    container.append(box)

})

function remove(index){
    //console.log(ele,index)

    mydata.splice(index,1)
    //console.log(data)

    localStorage.setItem("products",JSON.stringify(mydata))
    window.location.reload()
}