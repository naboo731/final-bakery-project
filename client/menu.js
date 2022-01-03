const bakeryItemsContainer = document.querySelector("#bakery-items-container")
const errCallback = err => console.log(err)
let bakeryItems = []

const bakeryCallback = ({data}) => {
    bakeryItems = data
    bakeryItemsContainer.innerHTML = ``
    for(let i=0; i<bakeryItems.length; i++){
        let tile = document.createElement("div")
        tile.classList.add(`bakery-tile`)
        tile.classList.add(`tile${i}`)
        tile.innerHTML = `<img alt='bakery item cover image' src=${bakeryItems[i].imageURL} class="bakery-item-cover-image"/>
        <p class="bakery-item-title">${bakeryItems[i].item}</p>
        <p id="bakery-item-quantity">${bakeryItems[i].quantity}</p>
        <p id="bakery-item-price">Price: $${bakeryItems[i].price}</p>
        <button class="cart-btn tile${i}">add to cart</button>`
        bakeryItemsContainer.appendChild(tile)
    }
    giveActionToButtons()
}
const getBakeryItems = () => {
    axios.get("http://localhost:5500/api/bakery/")
    .then(bakeryCallback).catch(errCallback)
}
getBakeryItems()

function giveActionToButtons(){
    for(let i=0; i<bakeryItems.length; i++){
        const tileBtn = document.querySelector(`.tile${i}`)
        tileBtn.addEventListener("click", ()=>{
            alert(`Adding ${bakeryItems[i].item} to the cart for $${bakeryItems[i].price}`)
        })
    }
}


function displayBakery(arr) {
   bakeryItemsContainer.innerHTML = ``
   for (let i = 0; i < arr.length; i++) {
    createBakeryTile(arr[i])
}
}



////////////////////////////

const searchbar = document.querySelector("#search-bar")
searchbar.addEventListener('keyup', (el) => {
    const searchItem = el.target.value
    const filteredItems = bakeryItems.filter(arr => {
         return arr.item.includes(searchItem)
     })
     displayBakery(filteredItems)
 })

///////////////////////////
let allbtn = document.querySelector("#all-btn")
let cookiesbtn = document.querySelector("#cookies-btn")
let pastriesbtn = document.querySelector("#pastries-btn")
let cakesbtn = document.querySelector("#cakes-btn")
let chocolatebtn = document.querySelector("#chocolate-btn")

allbtn.addEventListener('click', () => {
    displayBakery(bakeryItems)
})

cookiesbtn.addEventListener('click', () => {
    const cookies = bakeryItems.filter(arr => {
        return arr.category.includes("cookies")
    })
    displayBakery(cookies)
})

pastriesbtn.addEventListener('click', () => {
    const pastries = bakeryItems.filter(arr => {
        return arr.category.includes("pastries")
    })
    displayBakery(pastries)
})

cakesbtn.addEventListener('click', () => {
    const cakes = bakeryItems.filter(arr => {
        return arr.category.includes("cake")
    })
    displayBakery(cakes)
})

chocolatebtn.addEventListener('click', () => {
    const chocolates = bakeryItems.filter(arr => {
        return arr.category.includes("chocolates")
    })
    displayBakery(chocolates)
})

//////////////////////////

const cartInfo = document.querySelector("#cart-info")
const cart = document.querySelector("#cart")
const cartBtn = document.querySelectorAll("#cart-btn")
const itemCount = document.querySelector("#item-count")


cartInfo.addEventListener('click', () => {
    cart.classList.toggle('show-cart')

})


