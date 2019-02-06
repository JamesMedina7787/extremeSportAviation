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
app.get("/ground-school", (req, res)=>{
  res.render('ground-school')
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
app.get("/rotax-service", (req, res)=>{
  res.render('rotax-service')
})

app.get("/licenseRating", (req, res)=>{
  res.render('licenseRating')
})
app.get("/contact-us", (req, res)=>{
  res.render('contact-us')
})
app.get("/pilot-supply-kit", (req, res)=>{
  res.render('pilot-supply-kit')
})
app.get("/rentals", (req, res)=>{
  res.render('rentals')
})
app.get("/student-resources", (req, res)=>{
  res.render('student-resources')
})
app.get("/heroes-discount", (req, res)=>{
  res.render('heroes-discount')
})
app.get("/packages", (req, res)=>{
  res.render('packages')
})
app.get("/services", (req, res)=>{
  res.render('services')
})
app.get("/for-sale", (req, res)=>{
  res.render('for-sale')
})
app.get("/success-achievement", (req, res)=>{
  res.render('success-achievement')
})
app.get("/local-attractions", (req, res)=>{
  res.render('local-attractions')
})
app.get("/rates", (req, res)=>{
  res.render('rates')
})
app.get("/gallery", (req, res)=>{
  res.render('gallery')
})
app.listen(PORT || 3000, ()=>{
  console.log("Server started...")
})
