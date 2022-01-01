const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ctrl = require("./controllers/controller")

app.get("/api/bakery/", ctrl.getBakeryItems)










app.listen(5500, () => {
    console.log("Up and running on 5500")
})