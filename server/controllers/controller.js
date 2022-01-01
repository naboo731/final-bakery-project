const bakery = require("../db.json")

module.exports = {
    getBakeryItems: (req, res) => {
        res.status(200).send(bakery.inventory)
    }
}