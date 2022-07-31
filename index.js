require('dotenv').config()
// Require needed modules.
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// Initialize the app object.
const app = express()
app.use(express.json())
app.use('/books', require('./controller/books'))

app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(" connected!");
    }
  );

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})