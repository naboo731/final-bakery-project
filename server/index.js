const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ctrl = require("./controllers/controller")

app.get("/api/bakery/", ctrl.getBakeryItems)
app.post("/api/bakery/loginUser", ctrl.getUser)
app.post("/api/bakery/user", ctrl.createUser, ctrl.getUser)
app.get("/api/bakery/alluser", ctrl.getAllUsers)
app.delete("/api/bakery/user", ctrl.deleteUser)



app.listen(5500, () => {
    console.log("Up and running on 5500")
})