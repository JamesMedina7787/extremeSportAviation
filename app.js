const express = require('express')
const ejs = require('ejs')
// const cookieParser=require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const handlebars = require('express-handlebars')
const mailer = require('nodemailer')
const paypal = require('paypal-rest-sdk')
const PORT = process.env.PORT || 3000
let request = require('request');





app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res)=>{
  let apiKey = '71ab51c8f81f7f3d79b8a500fe6b9da8';
  let city = 'ontario';
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      var grr = JSON.parse(body)
      var TenDayWeather=[];
for(let x = 0;x < 30;x++){
      var weather = {
        dt_text: city,
        temperature: Math.round((grr.list[x].main.temp) / 10),
        clouds:grr.list[x].clouds,
        wind:grr.list[x].wind,
        rain:grr.list[x].rain,
        snow:grr.list[x].snow,
        description:grr.list[x].icon,
        icon:grr.list[x].weather[0].icon,
        date: grr.list[x].dt_txt

      }
console.log({weather})
      TenDayWeather.push(weather)
      weather = ''
    }
      var weather_data = {TenDayWeather:TenDayWeather}


      res.render('home', weather_data)
    }

  });

})
app.get('/home', (req, res)=>{
  let apiKey = '71ab51c8f81f7f3d79b8a500fe6b9da8';
  let city = 'ontario';
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      var grr = JSON.parse(body)
      var TenDayWeather=[];
for(let x = 0;x < 30;x++){
      var weather = {
        dt_text: city,
        temperature: Math.round((grr.list[x].main.temp) / 10),
        clouds:grr.list[x].clouds,
        wind:grr.list[x].wind,
        rain:grr.list[x].rain,
        snow:grr.list[x].snow,
        description:grr.list[x].icon,
        icon:grr.list[x].weather[0].icon,
        date: grr.list[x].dt_txt

      }

      TenDayWeather.push(weather)
      weather = ''
    }
      var weather_data = {TenDayWeather:TenDayWeather}


      res.render('home', weather_data)
    }
  });

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




app.post('/send', (req,res)=>{

  const output = `
  <p class="message">You have a new contact request</p>
  <h3 class="list-heading">Contact Details</h3>
  <ul>
    <li class="listed">${req.body.name}</li>
    <li class="listed">${req.body.email}</li>
    <li class="listed">${req.body.phone}</li>
  </ul>
  <h3 class="literature">${req.body.message}</h3>
  `
  async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();
  let transporter = mailer.createTransport({
    host: "mbox.freehostia.com",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'james@eastchesterappliancecenter.net', // generated ethereal user
      pass: '' // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <james@eastchesterappliancecenter.net>', // sender address
    to: "james@eastchesterappliancecenter.net", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  let info = await
  transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", mailer.getTestMessageUrl(info));
   // var msg = {message:'thank you'}
}
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
  console.log(`*****${req.body}*****`)
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
  console.log(req.body.ten)
  res.render('rates')
})
app.get("/gallery", (req, res)=>{
  res.render('gallery')
})
app.get("/", (req,res)=>{
  res.render("paypal")
})

paypal.configure({
  'mode': 'sandbox',
  'client_id':
  'AR8pw7JPA_Ywct07uTzyowHUG2l7_AuU-CZM4j_Ly6YzJwCxRCNIZcVZGwaS83UMAXjFhfOMO75_bAzd',
  'client_secret':'EOwSpw_z2ZccEbKKGgVZpxZ8r8G5CFZvP73Kt-cgYu_lAFsUUCONAKLWQAkuOVV4EXi0NyK9TQkCH77r'
})


app.post("/pay", (req,res)=>{

  var price =  req.body.option
  var quantity = req.body.option2
  var total = price * quantity
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": `http://localhost:3000/success/${total}`, //
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
              //fields from our form
                "name": "one flight",
                //product number i guess
                "sku": "001",
                "price": total,
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": total
        },
        "description": "This is the payment description."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0; i < payment.links.length; i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href)
          }
        }
    }
});
})
var route = '/[\d\.]+/'
//payroute end here
app.get('/success/:route', (req, res)=>{
  const payerId = req.query.PayerID
  const paymentId = req.query.paymentId
  const priced = req.params.route
console.log(`${req.query.PayerID} *** ${req.query.paymentId}  *** ${priced}`)
  // console.log(`${price}`)
  var execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": `${priced}`
        }
    }]
};
paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        res.send(`Your account has been charged ${priced}`)
    }
});
});
app.get('/cancel', (req, res)=>res.send('Cancelled'))
app.listen(PORT || 3000, ()=>{
  console.log("Server started...")
}
)
