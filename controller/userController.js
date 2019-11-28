const users = require("../models/Users")

exports.index = (req,res)=>{
    users.find({})
    .then((data)=>{
        res.render('index', {data:data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.users = (req,res)=>{
    users.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    res.redirect('/')
}

//update
exports.getUpdate = (req,res)=>{
    users.findById(req.params.id)
    .then((data)=>{
        res.render('update', {updateUser:data})
    })
}

exports.putUpdate = (req,res)=>{
    const id = req.params.id
    users.findByIdAndUpdate((id),{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    .then(()=>{
    res.redirect('/')
    })
}

//delete
exports.deleteBtn = (req,res)=>{
    const id = req.params.id
    users.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/')
    })
}