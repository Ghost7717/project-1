

//add products
var product = [
    {name: "Iconic Ventage Bicycle", headline: "Old Time Bike for sale", price: "30,000", image: "https://vintageindustrialstyle.com/wp-content/uploads/2014/03/iconic_vintage_bicycles_4.jpg"},
    {name: "Golden Bicycle", headline: "Gold with White Bicycle", price: "25,000", image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Mountain Bicycle", headline: "Mountain Bicycle ", price: "20,000", image: "https://images.pexels.com/photos/2790150/pexels-photo-2790150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Pink Bicycle", headline: "Girls favorite Bicycle", price: "18,000", image: "https://media.karousell.com/media/photos/products/2020/8/28/99_sales__26_24_inch_roadbike__1598634424_de2fef2d_progressive.jpg"}   
];

function addProducts(){
    var clutter = "";
    product.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}" />
            </div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.headline}</h3>
                        <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                    </button>
                </div>
            </div>
        </div>`;
    })

    document.querySelector('.products').innerHTML = clutter;
}


addProducts();


//add popular
var popular = [
    {name: "Old Fashion Bicycle", headline: "Black and Gray Road Bicycle", price: "19,000", image: "https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Sporty Bicycle", headline: "Sporty Mountain Bicycle", price: "21,000", image: "https://images.pexels.com/photos/8755529/pexels-photo-8755529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Bicycle", headline: "Blue City Bicycle Beside Gray Wall", price: "15,000", image: "https://images.pexels.com/photos/12102681/pexels-photo-12102681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];

function addPopular(){
    var clutter = ""
    popular.forEach(function(popular){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${popular.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${popular.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${popular.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}
addPopular();

//add cart
var cart = []
function addCartProducts(){
    document.querySelector(".products")
    .addEventListener('click', function(details){
        if(details.target.classList.contains('add')){
            cart.push(product[details.target.dataset.index])
        }
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener('click', function(){
        document.querySelector(".cartexpnd").style.display = "block"
        var clutter = ""
        cart.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${prod.image}"/></div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
            </div>
            </div>`
       })
       document.querySelector(".cartexpnd")
       .innerHTML = clutter

    })
}
showCart();
addCartProducts();

