const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")


route.get('/', userController.index)

route.post('/', userController.users)

//update
route.get('/update/:id', userController.getUpdate)

route.put('/update/:id', userController.putUpdate)

//delete
route.delete('/delete/:id', userController.deleteBtn)

module.exports = route