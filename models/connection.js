const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:Shaktifa15@cluster0.zmkrfaw.mongodb.net/Tripperz';
//const connectionString = 'mongodb+srv://raydaouenniche:RaydaHsan123@cluster0.jz4k2u3.mongodb.net/Triperz';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
