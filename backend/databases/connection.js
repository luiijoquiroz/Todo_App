const mongoose = require('mongoose');

const connection = function() {
    // console.log(process.argv)

    mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { server: { socketOptions: { keepAlive: 1 } } });

    mongoose.connection.on('connected', () => {
        console.log('Connected Mongoose')
    });

    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });




}

module.exports = connection;