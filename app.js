const express = require('express')
const ejs = require('ejs')
// const cookieParser=require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('home')
})
app.get("/home", (req, res)=>{
  res.render('home')
})
app.get("/about-us", (req, res)=>{
  res.render('about-us')
})
app.get("/flight-training", (req, res)=>{
  res.render('flight-training')
})
app.get("/intro-to-flight", (req, res)=>{
  res.render('intro-to-flight')
})
app.get("/locations", (req, res)=>{
  res.render('locations')
})
app.get("/our-aircraft", (req, res)=>{
  res.render('our-aircraft')
})

app.listen(PORT || 3000, ()=>{
  console.log("Server started...")
})
