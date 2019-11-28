const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
const mongoose = require('mongoose')
const methodOverride = require ('method-override')

const indexRoute = require("./routes/indexRoute")

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : false}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/users', (err)=>{
    if(err){
        console.log('err')
    }else{
        console.log('DB connected')
    }
})

app.use("/", indexRoute)

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`)
})