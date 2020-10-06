const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

//Using a parser
app.listen(5000);
app.use(bodyParser.json());
app.use(cors()) 

//Import Routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);


//Port we are listening to



//Connect to MongoDB
mongoose.connect('mongodb+srv://Admin:brasil10@cluster0.avrwu.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser:true, useUnifiedTopology:true }, () =>{
    console.log('Conectado ao DB!')
});
