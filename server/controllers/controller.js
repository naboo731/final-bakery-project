const bakery = require("../db.json")

module.exports = {
    getBakeryItems: (req, res) => {
        res.status(200).send(bakery.inventory)
    }, 
    getUser: (req, res) => {
       let {email, password} = req.body
       console.log(req)
       let user = bakery.users.filter((el) => {
        return el.email === email && el.password === password
       })
       console.log(user)
       if (user.length === 0){
           res.status(400).send("User not found")
       } else {
           res.status(200).send(user)
       }
    }, 
    getAllUsers: (req,res)=>{
        res.status(200).send(bakery.users)
    },
    createUser: (req, res, next) => {
        let {firstName, lastName, email, password} = req.body
        let user = {
            firstName, 
            lastName,
            email,
            password
        }
        bakery.users.push(user)
        next() //getUser
    },
   deleteUser: (req, res) => {
     let {email} = req.body
     let users = bakery.users.filter((el)=> {
         return el.email !== email
     })
     bakery.users = users
     res.status(200).send("User was deleted")
   }
}