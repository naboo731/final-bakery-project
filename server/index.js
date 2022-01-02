const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ctrl = require("./controllers/controller")

app.get("/api/bakery/", ctrl.getBakeryItems)
app.get("/api/bakery/user", ctrl.getUser)
app.post("/api/bakery/user", ctrl.createUser, ctrl.getUser)
app.delete("/api/bakery/user", ctrl.deleteUser)



app.listen(5500, () => {
    console.log("Up and running on 5500")
})