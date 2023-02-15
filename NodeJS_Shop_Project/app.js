const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

require("dotenv").config()

const errorController = require('./controllers/error');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('63eb4c4d020951703b5d7847')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id)
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000);
// });

mongoose.connect("mongodb+srv://ananth:Naimisha%401999@cluster0.gtxma2y.mongodb.net/shop?retryWrites=true&w=majority")
.then(() => {
  app.listen(3000);
})