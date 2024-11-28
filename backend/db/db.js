const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to database'))
        .catch(err => console.error('Database connection error:', err));
}

module.exports = connectToDb;