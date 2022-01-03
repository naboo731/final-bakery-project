const bakeryItemsContainer = document.querySelector("#bakery-items-container")
const errCallback = err => console.log(err)
let bakeryItems = []

const bakeryCallback = ({data}) => {
    bakeryItems = data
    createBakeryTiles(bakeryItems)
    giveActionToButtons()
}
const getBakeryItems = () => {
    axios.get("http://localhost:5500/api/bakery/")
    .then(bakeryCallback).catch(errCallback)
}
getBakeryItems()

function createBakeryTiles(items){
    bakeryItemsContainer.innerHTML = ``
    for(let i=0; i<items.length; i++){
        let tile = document.createElement("div")
        tile.classList.add(`bakery-tile`)
        tile.classList.add(`tile${i}`)
        tile.innerHTML = `<img alt='bakery item cover image' src=${items[i].imageURL} class="bakery-item-cover-image"/>
        <p class="bakery-item-title">${items[i].item}</p>
        <p id="bakery-item-quantity">${items[i].quantity}</p>
        <p id="bakery-item-price">Price: $${items[i].price}</p>
        <button class="cart-btn tile${i}">add to cart</button>`
        bakeryItemsContainer.appendChild(tile)
    }
}


function displayBakery(arr) {
    bakeryItemsContainer.innerHTML = ``
    createBakeryTiles(arr)
}



////////////////////////////

const searchbar = document.querySelector("#search-bar")
searchbar.addEventListener('keyup', (el) => {
    const searchItem = el.target.value
    const filteredItems = bakeryItems.filter(item => {
         return item.item.includes(searchItem)
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
const displayedCart = document.querySelector(".show-cart")
const clearCartBtn = document.querySelector("#clear-cart")
const checkoutBtn = document.querySelector("#checkout-btn")


cartInfo.addEventListener('click', () => {
    cart.classList.toggle('show-cart')
})

let num = 0
function giveActionToButtons(){
    for(let i=0; i<bakeryItems.length; i++){
        const tileBtn = document.querySelector(`.tile${i}`)
        tileBtn.addEventListener("click", ()=>{
            const cartedItem = document.createElement("div")
            cartedItem.classList.add(`cart-item-${num}`)
            cartedItem.classList.add("cart-item")
            cartedItem.innerHTML = 
            `<img src=${bakeryItems[i].imageURL} class="img-fluid-rounded-circle" id="cart-item-img" alt="">
            <p class="cart-item-title">${bakeryItems[i].item}</p>
            <p id="cart-item-price">Price: $${bakeryItems[i].price}</p>
            <a href='#' name='${i}' class='cart-item-remove' >
                <i class="fas fa-trash"></i>
              </a>`

            cart.appendChild(cartedItem)

            num+=1

            addDeleteFunctionality()
            
        })
    }
}

function addDeleteFunctionality() {
    const removeCartItem = document.querySelectorAll(".cart-item-remove")
    for (let i = 0; i < removeCartItem.length; i++){
        removeCartItem[i].addEventListener('click', (event) => {
            const targetElement = document.querySelector(`.cart-item-${event.target.parentElement.getAttribute("name")}`)
            targetElement.remove()
        })
    }
}




// removeCartItem.addEventListener('click', () => {
//     // let getParentId = this.getAttribute('cart-item')
//     // document.getElementById(getParentId).remove()


//     this.closest('img').remove()
// })

// const clearCart = () => {
//     checkoutBtn.addEventListener('click', () => {
//         cart.innerHTML = ""
//     })
// }

// checkoutBtn.addEventListener('click', () => {
//     alert('Thank you for your purchase!')

//     // clearCart()
// })