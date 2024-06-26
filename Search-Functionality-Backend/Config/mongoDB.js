const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/mongoFirst', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connect To MongoDB Database');
    }).catch((err) => {
        console.log('MongoDB Not Connected', err);
    });
};


module.exports = { connect };