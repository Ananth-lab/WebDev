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

app.use((req, res, next) => {
  User.findById('63ecf6fd457cfbf02829c0bc')
    .then(user => {
      req.user = user
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000);
// });

mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: "Ananth",
          email: "ananth@email.com",
          cart: {
            items: []
          }
        });
        user.save()
      }
    })

    app.listen(3000);
    console.log("Connected!")
  })