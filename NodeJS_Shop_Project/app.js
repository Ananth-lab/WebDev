const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const Product = require('./models/product');
const User = require('./models/user')


const sequelize = require("./util/database")
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(err))
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { contraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  // .sync({force : true})
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    console.log(user)
    if (!user) {
      return User.create({ name: "Frank", email: "frank@gmail.com" })
    }
    else{
      return user;
    }
    
  })
  .then(user => {
    app.listen(3000)
  })
  .catch(error => {
    console.log(error)
  })
