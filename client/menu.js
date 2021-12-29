const bakeryItemsContainer = document.querySelector("#bakery-items-container")
const errCallback = err => console.log(err)
let bakeryItems = []

const bakeryCallback = ({data}) => {
    bakeryItems = data
    displayBakery(data)
}
const getBakeryItems = () => {
    axios.get("http://localhost:5500/api/bakery/")
    .then(bakeryCallback).catch(errCallback)
}

function createBakeryTile(bakery) {
    const bakeryTile = document.createElement("div")
    bakeryTile.classList.add('bakery-tile')

    bakeryTile.innerHTML = 
    `<img alt='bakery item cover image' src=${bakery.imageURL} class="bakery-item-cover-image"/>
    <p class="bakery-item-title">${bakery.item}</p>
    <p id="bakery-item-quantity">${bakery.quantity}</p>
    <p id="bakery-item-price">${bakery.price}</p>
    <button id="cart-btn">add to cart</button>`

    bakeryItemsContainer.appendChild(bakeryTile)
}

function displayBakery(arr) {
   bakeryItemsContainer.innerHTML = ``
   for (let i = 0; i < arr.length; i++) {
    createBakeryTile(arr[i])
}
}

getBakeryItems()

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
