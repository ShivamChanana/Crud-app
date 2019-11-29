const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const methodOverride = require ('method-override')

const indexRoute = require("./routes/indexRoute")

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : false}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb+srv://shivam:123456ABC@cluster0-2aufw.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
    .then(()=>{
        console.log('DB Connected')
    })
    .catch((err)=>{
        console.log(err)
    })
    

app.use("/", indexRoute)

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`)
})