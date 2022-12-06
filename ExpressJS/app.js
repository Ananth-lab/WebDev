const express = require('express');
const path = require("path")
const bodyParser = require("body-parser");
const app = express()
const getErrorController = require('./controllers/error')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public")))
app.use('/admin', adminRoutes)
app.use('/shop',shopRoutes)
app.use(contactRoutes)

app.use(getErrorController.get404)
app.listen(4000)